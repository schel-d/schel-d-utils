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

test("unique", () => {
  const strEquals = (a: string, b: string) => a == b;

  expect(unique(["cat", "dog", "cat", "cat"], strEquals))
    .toStrictEqual(["cat", "dog"]);
  expect(unique(["dog", "dog", "cat", "cat"], strEquals))
    .toStrictEqual(["dog", "cat"]);
  expect(unique(["rat", "dog", "fat", "cat"], strEquals))
    .toStrictEqual(["rat", "dog", "fat", "cat"]);
  expect(unique(["rat", "rat", "rat"], strEquals))
    .toStrictEqual(["rat"]);
  expect(unique(["rat"], strEquals))
    .toStrictEqual(["rat"]);
  expect(unique([], strEquals))
    .toStrictEqual([]);
});
