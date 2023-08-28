/* Nathan's Numerals */
type NathanNumerals =
  | "•"
  | "|"
  | "—"
  | "+"
  | "x"
  | "="
  | "△"
  | "⊓"
  | "ϟ"
  | "⏥"
  | "⧖"
  | "⩕";
const nanu: Record<NathanNumerals, number> = {
  "⩕": 117147,
  "⧖": 59049,
  "⏥": 19683,
  ϟ: 6561,
  "⊓": 2187,
  "△": 729,
  "=": 243,
  x: 81,
  "+": 27,
  "—": 9,
  "|": 3,
  "•": 1,
} as const;

// this function is meant to be generic
const toNumerals = <T extends string>(
  num: number,
  numerals: Record<T, number>,
  numeralAccumulator: string[] = [],
) => {
  if (numerals === undefined) {
    throw new Error(
      "Numeral set undefined. A base set of numerals must be supplied",
    );
  }
  if (num < 0) {
    return toNumerals(Math.abs(num), numerals, ["-", ...numeralAccumulator]);
  }

  const next = Object.keys(numerals).find((n) => Math.floor(num / numerals[n]));

  if (next) {
    return toNumerals(num - numerals[next], numerals, [
      ...numeralAccumulator,
      next,
    ]);
  }

  return numeralAccumulator.join("");
};

export const toNanu = (num: number) => {
  // may need to add a way to reverse numeral systems
  const nu = toNumerals(num, nanu);
  return nu.split("").reverse().join("");
};
