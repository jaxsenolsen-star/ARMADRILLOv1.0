import type { Ore } from "./ores";
import { ORES as EARTH_ORES } from "./ores";

export type PlanetId = "earth" | "moon" | "mars";

export type PlanetPalette = {
  sky: [string, string];
  surface: string;
  grass: string;
  bands: { dark: string; base: string; light: string }[];
  rock: string;
  rockShades: [string, string, string];
};

export type Planet = {
  id: PlanetId;
  name: string;
  icon: string;
  /** Index in the save's rebirth progression (0 = earth, 1 = moon, 2 = mars). */
  order: number;
  gravity: number;
  /** Fuel burn rate multiplier — lower = slower. */
  fuelMul: number;
  /** Steering input burns fuel, not movement or digging. */
  ores: Ore[];
  palette: PlanetPalette;
  /** Whether UFOs spawn and shoot at the player. */
  ufos: boolean;
  /** Minimum depth where UFOs appear (Mars surface and below). */
  ufoMinDepth: number;
  tagline: string;
};

const MOON_ORES: Ore[] = [
  {
    id: "regolith",
    name: "Regolith",
    value: 5,
    hardness: 0,
    colors: ["#2a2a30", "#5a5a64", "#8a8a96", "#d0d0dc"],
    peak: 0,
    spread: 300,
    base: 1.0,
  },
  {
    id: "ilmenite",
    name: "Ilmenite",
    value: 12,
    hardness: 0,
    colors: ["#1a1a24", "#3a3a50", "#6a6a8a", "#aaaad0"],
    peak: 80,
    spread: 320,
    base: 0.9,
  },
  {
    id: "olivine",
    name: "Olivine",
    value: 28,
    hardness: 1,
    colors: ["#1a3a14", "#3a7a2a", "#6abc4a", "#c0f0a0"],
    peak: 240,
    spread: 340,
    base: 0.8,
  },
  {
    id: "anorthite",
    name: "Anorthite",
    value: 50,
    hardness: 1,
    colors: ["#2a2a3a", "#5a5a7a", "#9a9ac0", "#e0e0ff"],
    peak: 450,
    spread: 360,
    base: 0.7,
  },
  {
    id: "helium3",
    name: "Helium-3",
    value: 95,
    hardness: 2,
    colors: ["#0a1a3a", "#2a5aaa", "#6aaaff", "#c0e8ff"],
    peak: 750,
    spread: 400,
    base: 0.62,
  },
  {
    id: "lunarium",
    name: "Lunarium",
    value: 170,
    hardness: 2,
    colors: ["#1a0a2a", "#4a2a7a", "#8a5ad0", "#d0a8ff"],
    peak: 1100,
    spread: 420,
    base: 0.55,
  },
  {
    id: "selenite",
    name: "Selenite",
    value: 280,
    hardness: 3,
    colors: ["#0a2a2a", "#2a7a7a", "#6adada", "#c0ffff"],
    peak: 1500,
    spread: 460,
    base: 0.5,
  },
  {
    id: "mare-iron",
    name: "Mare Iron",
    value: 450,
    hardness: 3,
    colors: ["#1a1a18", "#3a3a38", "#6a6a68", "#a0a0a0"],
    peak: 2000,
    spread: 500,
    base: 0.48,
  },
  {
    id: "starcore",
    name: "Starcore",
    value: 750,
    hardness: 4,
    colors: ["#0a0a14", "#2a2a4a", "#5a5aaa", "#a0a0ff"],
    peak: 2800,
    spread: 560,
    base: 0.45,
  },
  {
    id: "voidstone",
    name: "Voidstone",
    value: 1200,
    hardness: 5,
    colors: ["#05050a", "#1a1a2a", "#3a3a5a", "#7a7ab0"],
    peak: 4000,
    spread: 640,
    base: 0.42,
  },
  {
    id: "astralite",
    name: "Astralite",
    value: 2200,
    hardness: 6,
    colors: ["#0a1a0a", "#2a6a3a", "#5ada7a", "#b0ffc0"],
    peak: 5500,
    spread: 700,
    base: 0.4,
  },
  {
    id: "nebula-shard",
    name: "Nebula Shard",
    value: 3800,
    hardness: 7,
    colors: ["#1a0a1a", "#5a2a5a", "#aa5aaa", "#e0a0e0"],
    peak: 7500,
    spread: 800,
    base: 0.38,
  },
];

const MARS_ORES: Ore[] = [
  {
    id: "rust-dust",
    name: "Rust Dust",
    value: 8,
    hardness: 0,
    colors: ["#5a1a0a", "#a04020", "#d06030", "#f0a070"],
    peak: 0,
    spread: 300,
    base: 1.0,
  },
  {
    id: "hematite",
    name: "Hematite",
    value: 22,
    hardness: 0,
    colors: ["#3a1010", "#7a2820", "#b04a3a", "#e08070"],
    peak: 100,
    spread: 340,
    base: 0.9,
  },
  {
    id: "frozen-co2",
    name: "Frozen CO2",
    value: 40,
    hardness: 1,
    colors: ["#1a3a4a", "#3a7a9a", "#7acada", "#c0f0ff"],
    peak: 280,
    spread: 360,
    base: 0.8,
  },
  {
    id: "olivine-mars",
    name: "Martian Olivine",
    value: 70,
    hardness: 1,
    colors: ["#2a3a10", "#5a7a2a", "#8ab04a", "#c0e080"],
    peak: 500,
    spread: 380,
    base: 0.72,
  },
  {
    id: "marsite",
    name: "Marsite",
    value: 130,
    hardness: 2,
    colors: ["#3a0a0a", "#8a2a2a", "#c04a4a", "#ff8080"],
    peak: 800,
    spread: 400,
    base: 0.65,
  },
  {
    id: "ice-crystal",
    name: "Ice Crystal",
    value: 210,
    hardness: 2,
    colors: ["#0a2a4a", "#2a6aaa", "#6aaae0", "#b0d8ff"],
    peak: 1200,
    spread: 420,
    base: 0.58,
  },
  {
    id: "frostbite",
    name: "Frostbite",
    value: 340,
    hardness: 3,
    colors: ["#0a3a3a", "#2a8a8a", "#6adada", "#a0ffff"],
    peak: 1700,
    spread: 460,
    base: 0.52,
  },
  {
    id: "arescore",
    name: "Arescore",
    value: 520,
    hardness: 3,
    colors: ["#2a0a1a", "#6a2a3a", "#aa4a5a", "#e08090"],
    peak: 2300,
    spread: 500,
    base: 0.48,
  },
  {
    id: "tharsis",
    name: "Tharsis",
    value: 850,
    hardness: 4,
    colors: ["#3a1a0a", "#7a4a2a", "#ba7a4a", "#f0b080"],
    peak: 3100,
    spread: 560,
    base: 0.45,
  },
  {
    id: "olympus",
    name: "Olympus",
    value: 1400,
    hardness: 5,
    colors: ["#1a0a1a", "#4a2a4a", "#8a5a8a", "#c0a0c0"],
    peak: 4200,
    spread: 640,
    base: 0.42,
  },
  {
    id: "phantomite",
    name: "Phantomite",
    value: 2600,
    hardness: 6,
    colors: ["#0a0a0a", "#2a2a2a", "#5a5a5a", "#909090"],
    peak: 6000,
    spread: 720,
    base: 0.4,
  },
  {
    id: "red-singularity",
    name: "Red Singularity",
    value: 4800,
    hardness: 7,
    colors: ["#0a0505", "#3a0a0a", "#8a1a1a", "#ff4040"],
    peak: 8500,
    spread: 900,
    base: 0.38,
  },
];

export const PLANETS: Planet[] = [
  {
    id: "earth",
    name: "Earth",
    icon: "🌍",
    order: 0,
    gravity: 1500,
    fuelMul: 1.0,
    ores: EARTH_ORES,
    palette: {
      sky: ["#63c8f2", "#a7e3fb"],
      surface: "#6b3f1d",
      grass: "#5cb03a",
      bands: [
        { dark: "#4a2c16", base: "#6b3f1d", light: "#8a5628" },
        { dark: "#452a15", base: "#663b1c", light: "#845126" },
        { dark: "#3d2716", base: "#5c381d", light: "#7a4b26" },
        { dark: "#372519", base: "#523620", light: "#6d4a2c" },
        { dark: "#31241d", base: "#493426", light: "#634733" },
        { dark: "#2b2220", base: "#40322c", light: "#59453c" },
        { dark: "#241f24", base: "#372f38", light: "#4d434f" },
        { dark: "#1f1d2b", base: "#2f2b42", light: "#443e5c" },
        { dark: "#1a1c30", base: "#282c4b", light: "#3b4069" },
        { dark: "#151c33", base: "#1f2c52", light: "#2e4074" },
        { dark: "#131b2f", base: "#1b2a4d", light: "#26406e" },
        { dark: "#160f2b", base: "#241947", light: "#372666" },
        { dark: "#12091f", base: "#1d1038", light: "#2d1a54" },
        { dark: "#0d0716", base: "#170c2a", light: "#241343" },
        { dark: "#08050f", base: "#100820", light: "#1b0f33" },
      ],
      rock: "#767a82",
      rockShades: ["#9aa0a9", "#83878f", "#63666d"],
    },
    ufos: false,
    ufoMinDepth: 0,
    tagline: "Home sweet home. Dig deep and get rich.",
  },
  {
    id: "moon",
    name: "The Moon",
    icon: "🌕",
    order: 1,
    gravity: 480,
    fuelMul: 0.6,
    ores: MOON_ORES,
    palette: {
      sky: ["#05051a", "#1a1a3a"],
      surface: "#5a5a64",
      grass: "#8a8a96",
      bands: [
        { dark: "#2a2a30", base: "#4a4a54", light: "#6a6a74" },
        { dark: "#28282e", base: "#454550", light: "#62626e" },
        { dark: "#25252c", base: "#404048", light: "#5a5a64" },
        { dark: "#222229", base: "#3a3a42", light: "#52525a" },
        { dark: "#1f1f26", base: "#36363c", light: "#4a4a52" },
        { dark: "#1c1c24", base: "#303036", light: "#42424a" },
        { dark: "#191921", base: "#2a2a30", light: "#3a3a42" },
        { dark: "#16161e", base: "#25252b", light: "#34343a" },
        { dark: "#13131b", base: "#202026", light: "#2e2e34" },
        { dark: "#101018", base: "#1c1c22", light: "#28282e" },
        { dark: "#0e0e16", base: "#181820", light: "#24242a" },
        { dark: "#0c0c14", base: "#15151c", light: "#202028" },
        { dark: "#0a0a12", base: "#12121a", light: "#1c1c24" },
        { dark: "#080810", base: "#101018", light: "#181820" },
        { dark: "#06060e", base: "#0c0c14", light: "#14141c" },
      ],
      rock: "#5a5a64",
      rockShades: ["#7a7a84", "#64646e", "#48484e"],
    },
    ufos: false,
    ufoMinDepth: 0,
    tagline: "Low gravity, lunar riches. Float through the regolith.",
  },
  {
    id: "mars",
    name: "Mars",
    icon: "🔴",
    order: 2,
    gravity: 720,
    fuelMul: 0.75,
    ores: MARS_ORES,
    palette: {
      sky: ["#7a2020", "#d05030"],
      surface: "#7a3818",
      grass: "#a04020",
      bands: [
        { dark: "#4a1a0a", base: "#6a2812", light: "#8a3a1c" },
        { dark: "#45180a", base: "#642612", light: "#82361a" },
        { dark: "#3d1608", base: "#5c2210", light: "#78301a" },
        { dark: "#371408", base: "#522010", light: "#6d2c1c" },
        { dark: "#311308", base: "#491c10", light: "#63281c" },
        { dark: "#2b1208", base: "#401810", light: "#59241c" },
        { dark: "#241008", base: "#371610", light: "#4d2018" },
        { dark: "#1f0e08", base: "#2f1410", light: "#441c1c" },
        { dark: "#1a0c08", base: "#281410", light: "#3b2020" },
        { dark: "#150a08", base: "#1f1210", light: "#2e2420" },
        { dark: "#130a08", base: "#1b1010", light: "#26201c" },
        { dark: "#160a08", base: "#241210", light: "#37201c" },
        { dark: "#120808", base: "#1d0e10", light: "#2d181c" },
        { dark: "#0d0608", base: "#170a10", light: "#241218" },
        { dark: "#080408", base: "#100810", light: "#1b1018" },
      ],
      rock: "#6a3a28",
      rockShades: ["#8a5a3a", "#7a4a2a", "#5a2a1a"],
    },
    ufos: true,
    ufoMinDepth: 0,
    tagline: "Red planet, hostile skies. UFOs hunt diggers — watch out!",
  },
];

export function getPlanet(id: PlanetId): Planet {
  return PLANETS.find((p) => p.id === id) ?? PLANETS[0]!;
}

/** Returns the planet the player should be on given their rebirth count. */
export function planetForRebirth(rebirths: number): Planet {
  const order = Math.min(rebirths, PLANETS.length - 1);
  return PLANETS.find((p) => p.order === order) ?? PLANETS[0]!;
}

/** Cost of the next rebirth. Base 2.5M, scales up 40% per rebirth owned. */
export function rebirthCost(rebirths: number): number {
  return Math.round(2_500_000 * Math.pow(1.4, rebirths));
}
