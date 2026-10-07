"use client";

"use no memo";

import { useMemo } from "react";
import { Html } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import { CanvasTexture, LinearFilter, SRGBColorSpace } from "three";
import type { WalkZoneId } from "./types";
import { ROOM } from "./types";

const NAVY = "#073572";
const BLUE = "#0c4da2";
const RED = "#c62828";
const PAPER = "#edf2f8";
const WHITE = "#f8fafc";
const STEEL = "#7d8b9a";
const ASPHALT = "#6b7585";

type SignLine = {
  text: string;
  y: number;
  size: number;
  color: string;
  weight?: string;
  tracking?: number;
};

/** Paint sign copy onto a canvas so it stays fixed on the board mesh. */
function makeSignTexture(
  width: number,
  height: number,
  bg: string,
  lines: SignLine[],
  extras?: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);
  extras?.(ctx, width, height);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (const line of lines) {
    ctx.fillStyle = line.color;
    ctx.font = `${line.weight ?? "700"} ${line.size}px Arial, Helvetica, sans-serif`;
    if (line.tracking) {
      // Letter-spacing approximation for uppercase retail fascia
      const chars = line.text.split("");
      const total =
        chars.reduce((sum, ch) => sum + ctx.measureText(ch).width, 0) +
        line.tracking * (chars.length - 1);
      let x = width / 2 - total / 2;
      for (const ch of chars) {
        const w = ctx.measureText(ch).width;
        ctx.fillText(ch, x + w / 2, line.y);
        x += w + line.tracking;
      }
    } else {
      ctx.fillText(line.text, width / 2, line.y);
    }
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

function SignFace({
  width,
  height,
  position,
  texture,
}: {
  width: number;
  height: number;
  position: [number, number, number];
  texture: CanvasTexture | null;
}) {
  if (!texture) return null;
  return (
    <mesh position={position}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial map={texture} roughness={0.85} metalness={0} />
    </mesh>
  );
}

type Props = {
  active: WalkZoneId;
  onSelect: (id: WalkZoneId) => void;
};

function Hotspot({
  id,
  position,
  active,
  onSelect,
  label,
}: {
  id: WalkZoneId;
  position: [number, number, number];
  active: WalkZoneId;
  onSelect: (id: WalkZoneId) => void;
  label: string;
}) {
  const isActive = active === id;
  return (
    <group position={position}>
      <mesh
        onClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          onSelect(id);
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[0.11, 20, 20]} />
        <meshStandardMaterial
          color={isActive ? RED : BLUE}
          emissive={isActive ? RED : BLUE}
          emissiveIntensity={isActive ? 0.7 : 0.35}
          roughness={0.3}
        />
      </mesh>
      <Html distanceFactor={8} position={[0, 0.26, 0]} center sprite>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(id);
          }}
          className={`pointer-events-auto whitespace-nowrap border px-1.5 py-0.5 text-[10px] font-semibold shadow-sm ${
            isActive
              ? "border-red bg-paper text-red"
              : "border-blue/40 bg-paper text-blue-deep"
          }`}
        >
          {label}
        </button>
      </Html>
    </group>
  );
}

function Battery({
  position,
  color = "#1f2937",
}: {
  position: [number, number, number];
  color?: string;
}) {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={[0.24, 0.18, 0.15]} />
      <meshStandardMaterial color={color} roughness={0.55} />
    </mesh>
  );
}

/** Exterior long wall; optional centred roll-up cutout. */
function ShellLongWall({
  z,
  opening = false,
}: {
  z: number;
  opening?: boolean;
}) {
  const h = ROOM.height + 0.2;
  const wallLen = ROOM.length + 0.2;
  if (!opening) {
    return (
      <mesh position={[0, h / 2 - 0.05, z]} castShadow receiveShadow>
        <boxGeometry args={[wallLen, h, 0.1]} />
        <meshStandardMaterial color={NAVY} roughness={0.55} metalness={0.15} />
      </mesh>
    );
  }
  const openW = 3.4;
  const flank = (wallLen - openW) / 2;
  const leftX = -openW / 2 - flank / 2;
  const rightX = openW / 2 + flank / 2;
  return (
    <group>
      <mesh position={[leftX, h / 2 - 0.05, z]} castShadow>
        <boxGeometry args={[flank, h, 0.1]} />
        <meshStandardMaterial color={NAVY} roughness={0.55} metalness={0.15} />
      </mesh>
      <mesh position={[rightX, h / 2 - 0.05, z]} castShadow>
        <boxGeometry args={[flank, h, 0.1]} />
        <meshStandardMaterial color={NAVY} roughness={0.55} metalness={0.15} />
      </mesh>
      <mesh position={[0, h - 0.22, z]} castShadow>
        <boxGeometry args={[openW + 0.15, 0.42, 0.12]} />
        <meshStandardMaterial color={BLUE} roughness={0.5} metalness={0.1} />
      </mesh>
      <mesh
        position={[0, h - 0.45, z + 0.08]}
        rotation={[0, 0, Math.PI / 2]}
        castShadow
      >
        <cylinderGeometry args={[0.07, 0.07, openW, 12]} />
        <meshStandardMaterial color="#1e293b" metalness={0.4} roughness={0.4} />
      </mesh>
    </group>
  );
}

export function ContainerScene({ active, onSelect }: Props) {
  const halfL = ROOM.length / 2;
  const halfW = ROOM.width / 2;
  const h = ROOM.height;
  const shellH = h + 0.2;

  const stockBatteries = useMemo(() => {
    const items: { pos: [number, number, number]; color: string }[] = [];
    const colors = ["#111827", "#374151", "#1f2937", "#0f172a", "#243044"];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 10; col++) {
        items.push({
          pos: [-1.7 + col * 0.36, 0.35 + row * 0.42, -halfW + 0.3],
          color: colors[(row + col) % colors.length],
        });
      }
    }
    return items;
  }, [halfW]);

  const fasciaTex = useMemo(
    () =>
      makeSignTexture(1024, 256, NAVY, [
        {
          text: "CAR BATTERIES FOR SALE",
          y: 100,
          size: 52,
          color: "#ffffff",
          weight: "800",
          tracking: 4,
        },
        {
          text: "Your Company Name",
          y: 175,
          size: 36,
          color: "#dbeafe",
          weight: "600",
        },
      ]),
    [],
  );

  const hoursTex = useMemo(
    () =>
      makeSignTexture(
        512,
        512,
        WHITE,
        [
          {
            text: "HOURS",
            y: 58,
            size: 36,
            color: "#ffffff",
            weight: "800",
            tracking: 3,
          },
          {
            text: "Mon–Fri  08:00–17:00",
            y: 175,
            size: 28,
            color: NAVY,
            weight: "700",
          },
          {
            text: "Sat  08:00–13:00",
            y: 230,
            size: 28,
            color: NAVY,
            weight: "700",
          },
          { text: "Sun  Closed", y: 285, size: 28, color: NAVY, weight: "700" },
          {
            text: "012 000 0000",
            y: 400,
            size: 34,
            color: NAVY,
            weight: "800",
          },
        ],
        (ctx, w) => {
          ctx.fillStyle = BLUE;
          ctx.fillRect(0, 0, w, 100);
          ctx.strokeStyle = "rgba(7, 53, 114, 0.25)";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(64, 340);
          ctx.lineTo(w - 64, 340);
          ctx.stroke();
        },
      ),
    [],
  );

  const unitechTex = useMemo(
    () =>
      makeSignTexture(512, 512, RED, [
        { text: "Unitech", y: 220, size: 72, color: "#ffffff", weight: "800" },
        {
          text: "BATTERIES",
          y: 300,
          size: 40,
          color: "#ffffff",
          weight: "700",
          tracking: 6,
        },
      ]),
    [],
  );

  return (
    <group>
      {/* Yard / parking */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.03, 1.8]}
        receiveShadow
      >
        <planeGeometry args={[18, 14]} />
        <meshStandardMaterial color={ASPHALT} roughness={0.98} />
      </mesh>
      {/* Bay lines */}
      {[-1.3, 1.3].map((x) => (
        <mesh
          key={x}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[x, -0.02, 2.7]}
        >
          <planeGeometry args={[0.08, 3.2]} />
          <meshStandardMaterial color="#dbe4f0" />
        </mesh>
      ))}

      {/* Fitment apron */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0.35, -0.015, 2.55]}
        receiveShadow
        onClick={(e) => {
          e.stopPropagation();
          onSelect("G");
        }}
      >
        <planeGeometry args={[3.6, 2.6]} />
        <meshStandardMaterial
          color={active === "G" ? "#9eb0c7" : "#8a97a8"}
          roughness={0.92}
        />
      </mesh>

      {/* Customer car outside */}
      <group position={[0.45, 0.38, 2.85]}>
        <mesh castShadow>
          <boxGeometry args={[1.85, 0.48, 0.95]} />
          <meshStandardMaterial color="#334155" roughness={0.35} />
        </mesh>
        <mesh position={[0.05, 0.36, 0]} castShadow>
          <boxGeometry args={[1.05, 0.4, 0.88]} />
          <meshStandardMaterial color="#1e293b" roughness={0.4} />
        </mesh>
        {/* windshield hint */}
        <mesh position={[0.45, 0.38, 0]} rotation={[0, 0, -0.2]}>
          <boxGeometry args={[0.04, 0.32, 0.82]} />
          <meshStandardMaterial color="#93c5fd" transparent opacity={0.55} />
        </mesh>
        {[
          [-0.6, 0.48],
          [0.55, 0.48],
          [-0.6, -0.48],
          [0.55, -0.48],
        ].map(([x, z]) => (
          <mesh key={`${x}-${z}`} position={[x, -0.2, z]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.17, 0.17, 0.14, 14]} />
            <meshStandardMaterial color="#0f172a" />
          </mesh>
        ))}
      </group>

      {/* ===== Exterior shell ===== */}
      <group>
        {/* Roof */}
        <mesh position={[0, shellH, 0]} castShadow receiveShadow>
          <boxGeometry args={[ROOM.length + 0.25, 0.1, ROOM.width + 0.25]} />
          <meshStandardMaterial color="#05284f" roughness={0.6} metalness={0.2} />
        </mesh>
        {/* Back long wall */}
        <ShellLongWall z={-(halfW + 0.08)} />
        {/* Front long wall with opening */}
        <ShellLongWall z={halfW + 0.08} opening />
        {/* End walls */}
        <mesh position={[-(halfL + 0.08), shellH / 2 - 0.05, 0]} castShadow>
          <boxGeometry args={[0.1, shellH, ROOM.width + 0.2]} />
          <meshStandardMaterial color={NAVY} roughness={0.55} metalness={0.15} />
        </mesh>
        <mesh position={[halfL + 0.08, shellH / 2 - 0.05, 0]} castShadow>
          <boxGeometry args={[0.1, shellH, ROOM.width + 0.2]} />
          <meshStandardMaterial color={NAVY} roughness={0.55} metalness={0.15} />
        </mesh>
        {/* End door recess hint */}
        <mesh position={[-(halfL + 0.02), 1.0, 0]}>
          <boxGeometry args={[0.04, 1.9, 1.0]} />
          <meshStandardMaterial color="#0a2f5c" />
        </mesh>

        {/* Top display board — retail offer + operator company name */}
        <group position={[0, shellH - 0.12, halfW + 0.18]}>
          <mesh castShadow>
            <boxGeometry args={[3.55, 0.72, 0.08]} />
            <meshStandardMaterial color={WHITE} roughness={0.7} />
          </mesh>
          <SignFace
            width={3.4}
            height={0.58}
            position={[0, 0, 0.045]}
            texture={fasciaTex}
          />
        </group>

        {/* Left of opening — hours + contact */}
        <group position={[-2.35, 1.35, halfW + 0.16]}>
          <mesh castShadow>
            <boxGeometry args={[0.95, 0.85, 0.06]} />
            <meshStandardMaterial color={WHITE} roughness={0.75} />
          </mesh>
          <SignFace
            width={0.88}
            height={0.78}
            position={[0, 0, 0.035]}
            texture={hoursTex}
          />
        </group>

        {/* Right of opening — Unitech product board */}
        <group position={[2.35, 1.35, halfW + 0.16]}>
          <mesh castShadow>
            <boxGeometry args={[0.95, 0.85, 0.06]} />
            <meshStandardMaterial color={WHITE} roughness={0.75} />
          </mesh>
          <SignFace
            width={0.82}
            height={0.72}
            position={[0, 0, 0.035]}
            texture={unitechTex}
          />
        </group>
      </group>

      {/* ===== Interior ===== */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
        <planeGeometry args={[ROOM.length - 0.08, ROOM.width - 0.08]} />
        <meshStandardMaterial color={PAPER} roughness={0.88} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, h - 0.02, 0]}>
        <planeGeometry args={[ROOM.length - 0.08, ROOM.width - 0.08]} />
        <meshStandardMaterial color={WHITE} roughness={0.95} />
      </mesh>
      {/* Interior back lining */}
      <mesh position={[0, h / 2, -halfW + 0.03]}>
        <boxGeometry args={[ROOM.length - 0.1, h - 0.08, 0.04]} />
        <meshStandardMaterial color="#f1f5f9" />
      </mesh>

      {/* Stock shelving */}
      <group>
        {[0.2, 0.62, 1.04].map((y) => (
          <mesh key={y} position={[0.05, y, -halfW + 0.2]} castShadow>
            <boxGeometry args={[3.8, 0.045, 0.36]} />
            <meshStandardMaterial color={STEEL} metalness={0.3} roughness={0.45} />
          </mesh>
        ))}
        {[-1.85, -0.6, 0.65, 1.9].map((x) => (
          <mesh key={x} position={[x, 0.7, -halfW + 0.2]}>
            <boxGeometry args={[0.05, 1.2, 0.36]} />
            <meshStandardMaterial color="#5f6b78" />
          </mesh>
        ))}
        {stockBatteries.map((b, i) => (
          <Battery key={i} position={b.pos} color={b.color} />
        ))}
      </group>

      {/* Counter */}
      <group position={[0.1, 0, 0.3]}>
        <mesh position={[0, 0.52, 0]} castShadow>
          <boxGeometry args={[1.75, 0.08, 0.72]} />
          <meshStandardMaterial color={WHITE} />
        </mesh>
        <mesh position={[0, 0.26, 0]} castShadow>
          <boxGeometry args={[1.7, 0.52, 0.66]} />
          <meshStandardMaterial color={NAVY} />
        </mesh>
        <mesh position={[0.48, 0.62, 0.08]} castShadow>
          <boxGeometry args={[0.3, 0.12, 0.22]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
        <mesh position={[-0.48, 0.74, 0]} castShadow>
          <boxGeometry args={[0.24, 0.3, 0.05]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
      </group>

      {/* Seat */}
      <group position={[1.2, 0, 0.3]}>
        <mesh position={[0, 0.3, 0]} castShadow>
          <cylinderGeometry args={[0.19, 0.21, 0.07, 16]} />
          <meshStandardMaterial color={WHITE} />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.045, 0.045, 0.3, 8]} />
          <meshStandardMaterial color={BLUE} />
        </mesh>
      </group>

      {/* Charge bay */}
      <group position={[-2.15, 0, 0.4]}>
        <mesh position={[0, 0.48, 0]} castShadow>
          <boxGeometry args={[0.75, 0.96, 0.58]} />
          <meshStandardMaterial color="#dbe5f2" />
        </mesh>
        {[0.16, -0.16].map((x) => (
          <mesh key={x} position={[x, 1.0, 0]} castShadow>
            <boxGeometry args={[0.24, 0.2, 0.3]} />
            <meshStandardMaterial color={BLUE} />
          </mesh>
        ))}
      </group>

      {/* Scrap */}
      <group position={[-2.2, 0, -0.55]}>
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.9, 0.08, 0.9]} />
          <meshStandardMaterial color="#94a3b8" />
        </mesh>
        <mesh position={[0, 0.13, 0]}>
          <boxGeometry args={[0.78, 0.08, 0.78]} />
          <meshStandardMaterial color="#b45309" />
        </mesh>
        {[
          [-0.18, 0.3, -0.12],
          [0.15, 0.3, 0.1],
          [-0.05, 0.3, 0.18],
        ].map((p, i) => (
          <Battery
            key={i}
            position={p as [number, number, number]}
            color="#334155"
          />
        ))}
      </group>

      {/* DB */}
      <mesh position={[2.5, 1.35, -0.65]} castShadow>
        <boxGeometry args={[0.08, 0.55, 0.42]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>

      {/* Ceiling light */}
      <mesh position={[0, h - 0.08, 0]}>
        <boxGeometry args={[3.4, 0.06, 0.2]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#dbeafe"
          emissiveIntensity={1.1}
        />
      </mesh>
      <pointLight position={[0, h - 0.25, 0]} intensity={0.55} distance={7} color="#eef5ff" />

      <Hotspot
        id="A"
        position={[0, 1.4, halfW - 0.05]}
        active={active}
        onSelect={onSelect}
        label="A · Roll-up"
      />
      <Hotspot
        id="B"
        position={[0.1, 1.25, 0.3]}
        active={active}
        onSelect={onSelect}
        label="B · Counter"
      />
      <Hotspot
        id="C"
        position={[1.2, 0.9, 0.3]}
        active={active}
        onSelect={onSelect}
        label="C · Seat"
      />
      <Hotspot
        id="D"
        position={[0.15, 1.4, -halfW + 0.5]}
        active={active}
        onSelect={onSelect}
        label="D · Stock"
      />
      <Hotspot
        id="E"
        position={[-2.15, 1.3, 0.4]}
        active={active}
        onSelect={onSelect}
        label="E · Charge"
      />
      <Hotspot
        id="F"
        position={[-2.2, 0.9, -0.55]}
        active={active}
        onSelect={onSelect}
        label="F · Scrap"
      />
      <Hotspot
        id="G"
        position={[0.45, 1.15, 2.85]}
        active={active}
        onSelect={onSelect}
        label="G · Fitment"
      />
    </group>
  );
}
