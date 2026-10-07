export type WalkZoneId = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "overview";

export type WalkZone = {
  id: WalkZoneId;
  title: string;
  copy: string;
  /** Camera position [x, y, z] */
  cam: [number, number, number];
  /** Look-at target */
  target: [number, number, number];
};

/** Finished internal approx: 5.7m L × 2.2m W × 2.25m H. Origin at floor centre. */
export const ROOM = {
  length: 5.7,
  width: 2.2,
  height: 2.25,
};

export const WALK_ZONES: WalkZone[] = [
  {
    id: "overview",
    title: "Overview",
    copy: "Orbit the unit. Long-side roll-up faces the parking apron. Cars stay outside.",
    cam: [5.2, 2.6, 6.2],
    target: [0.1, 0.95, 0.6],
  },
  {
    id: "A",
    title: "Customer face / roll-up",
    copy: "Generous long-side opening. Customers stand at the threshold. Fitment happens on the apron.",
    cam: [0.15, 1.55, 4.2],
    target: [0.1, 1.15, 0.55],
  },
  {
    id: "B",
    title: "Counter · test · POS",
    copy: "Compact counter with tester, quote pad, and your own POS. Primary staff station.",
    cam: [0.55, 1.5, 1.85],
    target: [0.1, 1.05, 0.3],
  },
  {
    id: "C",
    title: "Optional guest seat",
    copy: "One stool if someone waits while you pull stock. Skip it if the aisle feels tight.",
    cam: [1.55, 1.45, 1.7],
    target: [1.15, 0.6, 0.3],
  },
  {
    id: "D",
    title: "Stock wall",
    copy: "Single-sided shelving for flooded / EFB / AGM. Heaviest batteries on lower shelves.",
    cam: [0.35, 1.55, 1.05],
    target: [0.05, 1.05, -0.75],
  },
  {
    id: "E",
    title: "Charge bay",
    copy: "Bench for 2–4 chargers near the DB. Ventilated and kept away from scrap.",
    cam: [-1.55, 1.5, 1.45],
    target: [-2.1, 0.9, 0.4],
  },
  {
    id: "F",
    title: "Scrap pallet / bund",
    copy: "One pallet on a bunded tray by the end doors. Turn scrap often. No heap.",
    cam: [-1.35, 1.55, 0.35],
    target: [-2.15, 0.5, -0.5],
  },
  {
    id: "G",
    title: "Parking fitment bay",
    copy: "Customer parks outside. Staff carry the battery out and fit on the apron.",
    cam: [1.5, 2.1, 5.6],
    target: [0.45, 0.5, 2.7],
  },
];
