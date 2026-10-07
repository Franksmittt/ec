type Props = {
  label?: string;
  className?: string;
  aspect?: string;
};

/** Visual stand-in until real photography / container renders are supplied. */
export function MediaPlaceholder({
  label = "Image placeholder",
  className = "",
  aspect = "aspect-[4/3]",
}: Props) {
  return (
    <div
      className={`media-ph relative overflow-hidden ${aspect} ${className}`}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(198,40,40,0.18), transparent 40%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/55 via-blue-deep/10 to-transparent" />
      <div className="absolute left-4 top-4 h-8 w-8 border border-white/35" />
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/90">
          {label}
        </span>
        <span className="hidden text-[10px] text-paper/55 sm:inline">
          Replace with final asset
        </span>
      </div>
    </div>
  );
}
