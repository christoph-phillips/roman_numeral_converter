import RomanNumeralGenerator from "./index";

const numeralGenerator = new RomanNumeralGenerator();

describe("RomanNumeralGenerator", () => {
  describe("Input checks", () => {
    it("Throws an error when input is less than 1", () => {
      expect(() => numeralGenerator.generate(0)).toThrow(
        "Input provided was not between 1 and 3999"
      );
    });
    it("Throws an error when input is greater than 3999", () => {
      expect(() => numeralGenerator.generate(4000)).toThrow(
        "Input provided was not between 1 and 3999"
      );
    });
    it("Throws an error when input is not a number", () => {
      expect(() => numeralGenerator.generate("A String")).toThrow(
        "Input provided was not a number"
      );
    });
  });
  describe("Handles 10^0 cases", () => {
    const tests = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    tests.forEach((numeral, i) =>
      it(`Expect ${i + 1} to equal ${numeral}`, () =>
        expect(numeralGenerator.generate(i + 1)).toEqual(numeral))
    );
  });
  describe("Handles 10^1 cases", () => {
    const tests = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    tests.forEach((numeral, i) =>
      it(`Expect ${(i + 1) * 10} to equal ${numeral}`, () =>
        expect(numeralGenerator.generate((i + 1) * 10)).toEqual(numeral))
    );
  });
  describe("Handles 10^2 cases", () => {
    const tests = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    tests.forEach((numeral, i) =>
      it(`Expect ${(i + 1) * 100} to equal ${numeral}`, () =>
        expect(numeralGenerator.generate((i + 1) * 100)).toEqual(numeral))
    );
  });
  describe("Handles 10^3 cases", () => {
    const tests = ["M", "MM", "MMM"];
    tests.forEach((numeral, i) =>
      it(`Expect ${(i + 1) * 1000} to equal ${numeral}`, () =>
        expect(numeralGenerator.generate((i + 1) * 1000)).toEqual(numeral))
    );
  });
  describe("Handles range of values", () => {
    const tests = [
      [68, "LXVIII"],
      [649, "DCXLIX"],
      [891, "DCCCXCI"],
      [2014, "MMXIV"],
      [3999, "MMMCMXCIX"]
    ];
    tests.forEach(([input, expected], i) =>
      it(`Expect ${input} to equal ${expected}`, () =>
        expect(numeralGenerator.generate(input)).toEqual(expected))
    );
  });
});
