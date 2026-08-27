import { UPGRADES } from "./upgrades";

export type SaveData = {
  username: string;
  coins: number;
  levels: Record<string, number>;
  bestDepth: number;
  bestValue: number;
  runs: number;
  ownedShells: string[];
  equippedShell: string;
  /** Unlocked by entering the secret code on the title screen. */
  admin: boolean;
  /** Number of rebirths purchased. Each unlocks a new planet. */
  rebirths: number;
};

const SAVE_KEY = "armadrillo.save.v2";

export function defaultSave(): SaveData {
  return {
    username: "",
    coins: 0,
    levels: Object.fromEntries(UPGRADES.map((u) => [u.id, 0])),
    bestDepth: 0,
    bestValue: 0,
    runs: 0,
    ownedShells: ["basic"],
    equippedShell: "basic",
    admin: false,
    rebirths: 0,
  };
}

export function loadSave(): SaveData {
  const base = defaultSave();
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return base;
    const parsed = JSON.parse(raw) as Partial<SaveData>;
    return {
      ...base,
      ...parsed,
      levels: { ...base.levels, ...(parsed.levels ?? {}) },
      ownedShells: parsed.ownedShells?.length ? parsed.ownedShells : ["basic"],
      equippedShell: parsed.equippedShell ?? "basic",
      admin: parsed.admin ?? false,
      rebirths: parsed.rebirths ?? 0,
    };
  } catch {
    return base;
  }
}

export function saveSave(data: SaveData) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch {
    /* storage unavailable */
  }
}

/**
 * Rebirth resets coins, upgrades, and shells — but keeps the player's name,
 * best depth, best value, run count, and rebirth count (incremented).
 */
export function doRebirth(save: SaveData): SaveData {
  return {
    ...defaultSave(),
    username: save.username,
    bestDepth: save.bestDepth,
    bestValue: save.bestValue,
    runs: save.runs,
    admin: save.admin,
    rebirths: save.rebirths + 1,
  };
}
