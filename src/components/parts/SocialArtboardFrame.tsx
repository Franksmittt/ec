"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

type Props = {
  width: number;
  height: number;
  artboardRef: RefObject<HTMLDivElement | null>;
  /** Extra class on the visible frame */
  className?: string;
  children: ReactNode;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
};

/**
 * Scales a fixed 1080 artboard to fit the available width so phone previews
 * stay large enough to read. Export still captures the unscaled 1080 board.
 */
export function SocialArtboardFrame({
  width,
  height,
  artboardRef,
  className = "",
  children,
  onPointerEnter,
  onPointerLeave,
}: Props) {
  const shellRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.32);

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;

    const measure = () => {
      const available = el.clientWidth;
      if (available <= 0) return;
      // Near full width on phones; leave a hair of breathing room.
      setScale(Math.min(1, available / width));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div ref={shellRef} className="w-full max-w-[1080px]">
      <div
        className={`overflow-hidden border border-line shadow-[0_16px_40px_rgba(8,53,114,0.12)] ${className}`}
        style={{
          width: width * scale,
          height: height * scale,
          maxWidth: "100%",
        }}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      >
        <div
          style={{
            width,
            height,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <div
            ref={artboardRef}
            className="relative h-full w-full overflow-hidden"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
