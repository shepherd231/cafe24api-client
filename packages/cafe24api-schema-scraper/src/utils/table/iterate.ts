import { pipe } from 'fp-ts/function';
import { not } from 'fp-ts/Predicate';
import { map } from 'fp-ts/Array';
import { groupByPredicate } from '../array';
import { TableEntry, isSubElements } from './predicates';

export interface IterateTableEntriesOptions {
  /**
   * @description
   * If true, the first entry is omitted.
   */
  omitHeaders?: boolean;
}

/**
 * @description
 * Iterates table entries of the given table in Cafe24 API documentation.
 */
export const iterateTableEntries = (options?: IterateTableEntriesOptions) => {
  const { omitHeaders = false } = options || {};
  return <T>(callback: (entry: TableEntry) => T) => {
    return (table: HTMLTableElement) => {
      return pipe(
        table
          .querySelectorAll('tbody > tr')
          .values() as Iterable<HTMLTableRowElement>,
        (elements) => Array.from(elements),
        (entries) => entries.slice(omitHeaders ? 1 : 0),
        groupByPredicate(not(isSubElements)),
        map(callback),
      );
    };
  };
};
