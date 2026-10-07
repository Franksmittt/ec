"use client";

/* React Compiler can break R3F mutable scene graphs — keep this file uncompiled. */
"use no memo";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ContainerScene } from "./ContainerScene";
import { WALK_ZONES, type WalkZoneId } from "./types";

type Props = {
  active: WalkZoneId;
  onSelect: (id: WalkZoneId) => void;
};

type OrbitHandle = {
  target: { set: (x: number, y: number, z: number) => void };
  update: () => void;
};

function CameraRig({ active }: { active: WalkZoneId }) {
  const controls = useRef<OrbitHandle | null>(null);
  const { camera } = useThree();
  const zone = useMemo(
    () => WALK_ZONES.find((z) => z.id === active) ?? WALK_ZONES[0],
    [active],
  );

  useEffect(() => {
    const c = controls.current;
    if (!c) return;
    camera.position.set(zone.cam[0], zone.cam[1], zone.cam[2]);
    c.target.set(zone.target[0], zone.target[1], zone.target[2]);
    c.update();
  }, [camera, zone]);

  return (
    <OrbitControls
      ref={controls as never}
      makeDefault
      enableDamping
      dampingFactor={0.08}
      minDistance={1.4}
      maxDistance={14}
      maxPolarAngle={Math.PI / 2.02}
      target={zone.target}
    />
  );
}

function ContextLossGuard({ onLost }: { onLost: () => void }) {
  const { gl } = useThree();
  const onLostRef = useRef(onLost);
  onLostRef.current = onLost;

  useEffect(() => {
    const canvas = gl.domElement;
    const handleLost = (event: Event) => {
      event.preventDefault();
      onLostRef.current();
    };
    canvas.addEventListener("webglcontextlost", handleLost, false);
    return () => canvas.removeEventListener("webglcontextlost", handleLost);
  }, [gl]);

  return null;
}

export function WalkthroughCanvas({ active, onSelect }: Props) {
  const [canvasKey, setCanvasKey] = useState(0);
  const remountTimer = useRef<number | null>(null);
  const zone = WALK_ZONES.find((z) => z.id === active) ?? WALK_ZONES[0];

  const remount = () => {
    if (remountTimer.current != null) window.clearTimeout(remountTimer.current);
    remountTimer.current = window.setTimeout(() => {
      setCanvasKey((k) => k + 1);
    }, 300);
  };

  return (
    <Canvas
      key={canvasKey}
      // Soft/contact shadows previously exhausted WebGL on some GPUs.
      shadows
      dpr={[1, 1.25]}
      camera={{
        position: zone.cam,
        fov: 42,
        near: 0.1,
        far: 80,
      }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "default",
        failIfMajorPerformanceCaveat: false,
        stencil: false,
        depth: true,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#c8d5e6", 1);
      }}
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <color attach="background" args={["#c8d5e6"]} />
      <fog attach="fog" args={["#c8d5e6", 16, 30]} />
      <ambientLight intensity={0.6} />
      <directionalLight
        castShadow
        position={[6, 10, 7]}
        intensity={1.45}
        shadow-mapSize={[512, 512]}
        shadow-bias={-0.00025}
        shadow-camera-far={40}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-5, 4, -3]} intensity={0.4} />
      <hemisphereLight args={["#e8f0fa", "#7a8696", 0.5]} />
      <Suspense fallback={null}>
        <ContainerScene active={active} onSelect={onSelect} />
      </Suspense>
      <CameraRig active={active} />
      <ContextLossGuard onLost={remount} />
    </Canvas>
  );
}
