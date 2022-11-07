/**
 * Returns an array of numbers from start (inclusive) to end (exclusive), going
 * up by one at a time. Useful for iterating through numbers in a loop or lambda
 * function. E.g. `range(2, 6)` gives `[2, 3, 4, 5]`.
 * @param start The starting number (inclusive).
 * @param end The ending number (exclusive).
 */
export function range(start: number, end: number): number[] {
  return [...Array(end - start).keys()].map(x => x + start);
}

/**
 * Returns an array that contains {@link something} repeated a certain
 * {@link amount} of times.
 * @param something The value to appear several times in the array.
 * @param amount The number of times to include said value.
 */
export function repeat<T>(something: T, amount: number): T[] {
  const array: T[] = [];
  for (let i = 0; i < amount; i++) {
    array.push(something);
  }
  return array;
}

/**
 * Returns the same array, with the duplicates removes. The given
 * {@link equalsFunc} is used to determine if two items should be considered
 * duplicates.
 * @param array The array.
 * @param equalsFunc The function to determine if two items should be considered
 * duplicates.
 */
export function unique(array: string[]): string[];
export function unique(array: number[]): number[];
export function unique<T>(array: T[], equalsFunc?: (a: T, b: T) => boolean): T[];
export function unique<T>(array: T[], equalsFunc?: (a: T, b: T) => boolean): T[] {
  if (equalsFunc == null) {
    return [...new Set(array)];
  }

  const result: T[] = [];

  for (const item of array) {
    if (result.some(i => equalsFunc(i, item))) {
      continue;
    }

    result.push(item);
  }

  return result;
}

/**
 * Returns true if every element in the array is unique, according to the given
 * {@link equalsFunc}, which is used to determine if two items should be
 * considered duplicates.
 * @param array The array.
 * @param equalsFunc The function to determine if two items should be considered
 * duplicates.
 */
export function areUnique(array: string[]): boolean;
export function areUnique(array: number[]): boolean;
export function areUnique<T>(array: T[], equalsFunc?: (a: T, b: T) => boolean): boolean;
export function areUnique<T>(array: T[], equalsFunc?: (a: T, b: T) => boolean): boolean {
  return array.length == unique(array, equalsFunc).length;
}
