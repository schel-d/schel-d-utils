import { parseIntThrow, parseIntNull, posMod, hour12To24, hour24To12 }
  from "../src/_export";

test("parseIntThrow", () => {
  expect(parseIntThrow("3")).toStrictEqual(3);
  expect(parseIntThrow("-3")).toStrictEqual(-3);

  expect(() => parseIntThrow("3a")).toThrow();
  expect(() => parseIntThrow("-3a")).toThrow();

  expect(() => parseIntThrow("3.2")).toThrow();
  expect(() => parseIntThrow("-3.4")).toThrow();
  expect(() => parseIntThrow("0.0")).toThrow();
});

test("parseIntNull", () => {
  expect(parseIntNull("3")).toStrictEqual(3);
  expect(parseIntNull("-3")).toStrictEqual(-3);

  expect(parseIntNull("3a")).toEqual(null);
  expect(parseIntNull("-3a")).toEqual(null);

  expect(parseIntNull("3.2")).toEqual(null);
  expect(parseIntNull("-3.4")).toEqual(null);
  expect(parseIntNull("0.0")).toEqual(null);
});

test("posMod", () => {
  expect(posMod(0, 4)).toStrictEqual(0);
  expect(posMod(1, 4)).toStrictEqual(1);
  expect(posMod(2, 4)).toStrictEqual(2);
  expect(posMod(3, 4)).toStrictEqual(3);
  expect(posMod(4, 4)).toStrictEqual(0);
  expect(posMod(5, 4)).toStrictEqual(1);
  expect(posMod(6, 4)).toStrictEqual(2);
  expect(posMod(7, 4)).toStrictEqual(3);
  expect(posMod(8, 4)).toStrictEqual(0);

  expect(posMod(-8, 4)).toStrictEqual(0);
  expect(posMod(-7, 4)).toStrictEqual(1);
  expect(posMod(-6, 4)).toStrictEqual(2);
  expect(posMod(-5, 4)).toStrictEqual(3);
  expect(posMod(-4, 4)).toStrictEqual(0);
  expect(posMod(-3, 4)).toStrictEqual(1);
  expect(posMod(-2, 4)).toStrictEqual(2);
  expect(posMod(-1, 4)).toStrictEqual(3);
  expect(posMod(0, 4)).toStrictEqual(0);

  expect(posMod(8.000, 4)).toStrictEqual(0);
  expect(posMod(7.999, 4)).toBeCloseTo(3.999, 8);
  expect(posMod(0.5, 4)).toBeCloseTo(0.5, 8);
  expect(posMod(4.2, 4)).toBeCloseTo(0.2, 8);
  expect(posMod(4.001, 4)).toBeCloseTo(0.001, 8);

  expect(posMod(-4.000, 4)).toStrictEqual(0);
  expect(posMod(-3.999, 4)).toBeCloseTo(0.001, 8);
  expect(posMod(-4.1, 4)).toBeCloseTo(3.9, 8);
  expect(posMod(-2.2, 4)).toBeCloseTo(1.8, 8);
  expect(posMod(-0.001, 4)).toBeCloseTo(3.999, 8);
});

test("hour12To24", () => {
  expect(hour12To24(12, "am")).toStrictEqual(0);
  expect(hour12To24(1, "am")).toStrictEqual(1);
  expect(hour12To24(11, "am")).toStrictEqual(11);
  expect(hour12To24(12, "pm")).toStrictEqual(12);
  expect(hour12To24(1, "pm")).toStrictEqual(13);
  expect(hour12To24(11, "pm")).toStrictEqual(23);
});

test("hour24To12", () => {
  expect(hour24To12(0).hour).toStrictEqual(12);
  expect(hour24To12(1).hour).toStrictEqual(1);
  expect(hour24To12(11).hour).toStrictEqual(11);
  expect(hour24To12(12).hour).toStrictEqual(12);
  expect(hour24To12(13).hour).toStrictEqual(1);
  expect(hour24To12(23).hour).toStrictEqual(11);
  expect(hour24To12(0).half).toStrictEqual("am");
  expect(hour24To12(1).half).toStrictEqual("am");
  expect(hour24To12(11).half).toStrictEqual("am");
  expect(hour24To12(12).half).toStrictEqual("pm");
  expect(hour24To12(13).half).toStrictEqual("pm");
  expect(hour24To12(23).half).toStrictEqual("pm");
});
