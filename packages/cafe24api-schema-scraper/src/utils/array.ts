import { pipe } from 'fp-ts/function';
import { zip, prepend, append, reduce, reverse } from 'fp-ts/Array';

/**
 * @description
 * Groups the given tuples by the flag (second element of the tuple).
 *
 * The tuple consists of two elements:
 * - The first element is the item to be grouped.
 * - The second element is the flag to indicate whether the item should be grouped.
 */
const groupByFlag = <T>(tuples: [T, boolean][]) => {
  return pipe(
    tuples,
    reduce([[]] as T[][], (acc, [item, flag]) =>
      flag
        ? prepend([item])(acc)
        : prepend(append(item)(acc.at(0)))(
            // It's okay to be an empty array because
            // we use this list as a prepend target
            // @ts-ignore
            acc.slice(1),
          ),
    ),
    reverse,
    (items) => items.slice(items.at(0).length === 0 ? 1 : 0),
  );
};

/**
 * @description
 * Groups the given items when the predicate returns true.
 *
 * @example
 * const items = [1, 2, 3, 4, 5];
 * const predicate = (item: number) => item % 2 === 0;
 * gropuByPredicate(predicate)(items); // [[1], [2, 3], [4, 5]]
 */
export const groupByPredicate = <T>(predicate: (item: T) => boolean) => {
  return (items: T[]) => {
    return pipe(zip(items, items.map(predicate)), groupByFlag);
  };
};

/**
 * @description
 * Same as {@link groupByPredicate} but the predicate can be asynchronous.
 */
export const groupByAsnycPredicate = <T>(
  predicate: (item: T) => Promise<boolean>,
) => {
  return async (items: T[]) => {
    return pipe(
      zip(items, await Promise.all(items.map(predicate))),
      groupByFlag,
    );
  };
};
