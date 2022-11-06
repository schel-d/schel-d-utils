import { range, repeat, unique } from "../src/_export";

test("range", () => {
  expect(range(0, 4)).toStrictEqual([0, 1, 2, 3]);
  expect(range(2, 6)).toStrictEqual([2, 3, 4, 5]);
  expect(range(0, 0)).toStrictEqual([]);
  expect(range(0, 1)).toStrictEqual([0]);
});

test("repeat", () => {
  expect(repeat(2, 4)).toStrictEqual([2, 2, 2, 2]);
  expect(repeat("cat", 2)).toStrictEqual(["cat", "cat"]);
  expect(repeat("dog", 1)).toStrictEqual(["dog"]);
  expect(repeat("pizza", 0)).toStrictEqual([]);
});

test("unique (custom object)", () => {
  const obj = (a: string) => { return { x: a }; };
  const strEquals = (a: { x: string }, b: { x: string }) => a.x == b.x;

  expect(unique([obj("cat"), obj("dog"), obj("cat"), obj("cat")], strEquals))
    .toStrictEqual([obj("cat"), obj("dog")]);
  expect(unique([obj("dog"), obj("dog"), obj("cat"), obj("cat")], strEquals))
    .toStrictEqual([obj("dog"), obj("cat")]);
  expect(unique([obj("rat"), obj("dog"), obj("fat"), obj("cat")], strEquals))
    .toStrictEqual([obj("rat"), obj("dog"), obj("fat"), obj("cat")]);
  expect(unique([obj("rat"), obj("rat"), obj("rat")], strEquals))
    .toStrictEqual([obj("rat")]);
  expect(unique([obj("rat")], strEquals))
    .toStrictEqual([obj("rat")]);
  expect(unique([], strEquals))
    .toStrictEqual([]);
});

test("unique (primitive string)", () => {
  expect(unique(["cat", "dog", "cat", "cat"]))
    .toStrictEqual(["cat", "dog"]);
  expect(unique(["dog", "dog", "cat", "cat"]))
    .toStrictEqual(["dog", "cat"]);
  expect(unique(["rat", "dog", "fat", "cat"]))
    .toStrictEqual(["rat", "dog", "fat", "cat"]);
  expect(unique(["rat", "rat", "rat"]))
    .toStrictEqual(["rat"]);
  expect(unique(["rat"]))
    .toStrictEqual(["rat"]);
  expect(unique([]))
    .toStrictEqual([]);
});
