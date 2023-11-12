import { pipe } from 'fp-ts/function';
import { map } from 'fp-ts/Array';
import { NonPrimitiveProperty, Property } from '../model';
import { getInnerText } from './attribute';
import { groupByPredicate } from './array';

interface IterateTableEntriesOptions {
  /**
   * @description
   * If true, the first entry is omitted.
   */
  omitHeaders?: boolean;
}

/**
 * @description
 * Indicates the table entry.
 *
 * If the table entry has sub elements, it includes two elements.
 * Otherwise, it includes only one element.
 */
type TableEntry = HTMLTableRowElement[];

const hasSubElements = (entry: TableEntry): boolean =>
  Array.isArray(entry) && entry.length === 2;

const isSubElements = (element: HTMLTableRowElement) =>
  element.getAttribute('colspan') === '2';

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
        groupByPredicate(isSubElements),
        map(callback),
      );
    };
  };
};

const parseTableEntry = (entry: HTMLTableRowElement): Property => {
  const [name, description] = pipe(
    entry.querySelectorAll('td').values() as Iterable<HTMLTableRowElement>,
    (elements) => Array.from(elements),
    map(getInnerText),
  );

  return { name, description };
};

const parseSubElements = (root: HTMLTableRowElement): Property[] => {
  return pipe(
    root.querySelectorAll('.card-body > p').values() as Iterable<HTMLElement>,
    (elements) => Array.from(elements),
    map(getInnerText),
    map((row) => row.split('\n').map((s) => s.trim())),
    map(([name, ...descriptions]) => ({
      name,
      description: descriptions.join('\n'),
    })),
  );
};

const parseTableEntryWithSubElements = (
  entry: HTMLTableRowElement[],
): NonPrimitiveProperty => {
  if (!hasSubElements(entry))
    throw new Error('Table entry has no sub elements');

  const [main, subElements] = entry;

  return {
    ...parseTableEntry(main),
    type: 'non-primitive',
    subproperties: parseSubElements(subElements),
  };
};

export const parseTableEntries = (options?: IterateTableEntriesOptions) =>
  iterateTableEntries(options)((entry) =>
    hasSubElements(entry)
      ? parseTableEntryWithSubElements(entry)
      : parseTableEntry(entry.at(0)),
  );
