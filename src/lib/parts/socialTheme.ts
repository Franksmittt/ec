export type SocialTheme = "light" | "dark";

export type SocialThemeTokens = {
  id: SocialTheme;
  label: string;
  /** Full-bleed artboard fill */
  board: string;
  ink: string;
  muted: string;
  soft: string;
  accent: string;
  link: string;
  rule: string;
  well: string;
  wellBorder: string;
  chip: string;
  chipBorder: string;
  progressIdle: string;
  bar: string;
};

/** High-contrast tokens tuned for phone feed viewing. */
export const SOCIAL_THEMES: Record<SocialTheme, SocialThemeTokens> = {
  light: {
    id: "light",
    label: "Light",
    board:
      "linear-gradient(165deg, #ffffff 0%, #f4f7fc 55%, #e8eef7 100%)",
    ink: "#071628",
    muted: "#2a3d52",
    soft: "#4a5d73",
    accent: "#0c4da2",
    link: "#073572",
    rule: "rgba(7, 22, 40, 0.14)",
    well: "#ffffff",
    wellBorder: "rgba(7, 22, 40, 0.16)",
    chip: "#ffffff",
    chipBorder: "rgba(7, 22, 40, 0.18)",
    progressIdle: "rgba(7, 22, 40, 0.18)",
    bar: "#c62828",
  },
  dark: {
    id: "dark",
    label: "Dark",
    board:
      "radial-gradient(ellipse 80% 55% at 50% 28%, rgba(12,77,162,0.38), transparent 58%), linear-gradient(165deg, #071628 0%, #0a1f3a 45%, #050d18 100%)",
    ink: "#ffffff",
    muted: "rgba(255,255,255,0.78)",
    soft: "rgba(255,255,255,0.58)",
    accent: "#5b9fef",
    link: "#5b9fef",
    rule: "rgba(255,255,255,0.14)",
    well: "rgba(0,0,0,0.55)",
    wellBorder: "rgba(255,255,255,0.08)",
    chip: "rgba(255,255,255,0.08)",
    chipBorder: "rgba(255,255,255,0.14)",
    progressIdle: "rgba(255,255,255,0.25)",
    bar: "#c62828",
  },
};
