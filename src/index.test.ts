import { toNanu } from "./index";

describe("numerals", () => {
 test("toNumerals converts decimal numbers to numerals", () => {
    expect(toNanu(71)).toBe("••||—++");
  });
});
