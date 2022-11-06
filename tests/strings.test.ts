import { kebabify } from "../src/_export";

test("kebabify", () => {
  expect(kebabify("")).toStrictEqual("");
  expect(kebabify("SCREAM")).toStrictEqual("scream");
  expect(kebabify("Dog food")).toStrictEqual("dog-food");
  expect(kebabify("It's about time!")).toStrictEqual("its-about-time");
  expect(kebabify("Söme fǔnky letţèrs")).toStrictEqual("sme-fnky-letrs");
  expect(kebabify("n0mb3rs are f1ne")).toStrictEqual("n0mb3rs-are-f1ne");
});
