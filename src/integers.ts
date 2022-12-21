/**
 * Parses an integer. Throws an error if the string given is not an integer (it
 * contains decimals, text, or illegal symbols).
 * @param value The string with the integer.
 */
export function parseIntThrow(value: string): number {
  if (!/^-?[0-9]+$/g.test(value)) { throw notAnInt(value); }
  const num = parseInt(value, 10);
  return num;
}

/**
 * Parses an integer. Returns null if the string given is not an integer (it
 * contains decimals, text, or illegal symbols).
 * @param value The string with the integer.
 */
export function parseIntNull(value: string): number | null {
  if (!/^-?[0-9]+$/g.test(value)) { return null; }
  const num = parseInt(value, 10);
  return num;
}

/**
 * "`value`" is not an integer.
 */
const notAnInt = (value: string) => new Error(
  `"${value}" is not an integer.`
);

/**
 * For positive numbers, does `x % mod` as usual, but extends this pattern to
 * the negatives.
 *
 * For example:
 * - `posMod(-4, 4) = 0`
 * - `posMod(-3, 4) = 1`
 * - `posMod(-2, 4) = 2`
 * - `posMod(-1, 4) = 3`
 * - `posMod(0, 4) = 0`
 * - `posMod(1, 4) = 1`
 * - `posMod(2, 4) = 2`
 * - `posMod(3, 4) = 3`
 * - `posMod(4, 4) = 0`
 *
 * @param x The number to mod.
 * @param mod The mod factor.
 */
export function posMod(x: number, mod: number) {
  if (x >= 0) {
    return x % mod;
  }
  else {
    return (x + Math.floor(x) * -mod) % mod;
  }
}

/**
 * Returns the given 12-hour formatted hour as a 24-hour formatted hour. Can
 * only be expected to return sensible results if the hour passed is an integer
 * between 1 and 12 (inclusive).
 * @param hour The 12-hour formatted hour.
 * @param half The half of the day (either "am" or "pm").
 */
export function hour12To24(hour: number, half: "am" | "pm") {
  return (hour % 12) + (half == "pm" ? 12 : 0);
}

/**
 * Returns the given 24-hour formatted hour as a 12-hour formatted hour. Can
 * only be expected to return sensible results if the hour passed is an integer
 * between 0 and 23 (inclusive).
 * @param hour The 24-hour formatted hour.
 */
export function hour24To12(hour: number): { hour: number, half: "am" | "pm" } {
  return {
    hour: posMod(hour - 1, 12) + 1,
    half: hour < 12 ? "am" : "pm"
  };
}
