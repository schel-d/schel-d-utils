/**
 * Runs a function on an item then returns the item, similarly to Kotlin's apply
 * function (https://kotlinlang.org/docs/scope-functions.html#apply). Great for
 * modifying properties on an item you just created in situations where you need
 * to write the whole block as an expression.
 * @param item The item to run the function on.
 * @param func The function to run on the item.
 */
export function apply<T>(item: T, func: (item: T) => void): T {
  func(item);
  return item;
}
