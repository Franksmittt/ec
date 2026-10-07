import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  aspect?: string;
  priority?: boolean;
};

/** Concept visualisation asset with brochure-style caption. */
export function ConceptImage({
  src,
  alt,
  label = "Concept render · final product may vary",
  className = "",
  aspect = "aspect-[4/3]",
  priority = false,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-paper-soft ${aspect} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-deep/70 via-blue-deep/25 to-transparent p-3 md:p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/90 md:text-[11px]">
          {label}
        </p>
      </div>
    </div>
  );
}
