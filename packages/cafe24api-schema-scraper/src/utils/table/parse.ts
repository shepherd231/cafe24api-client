import { pipe } from 'fp-ts/function';
import { map } from 'fp-ts/Array';
import { NonPrimitiveProperty, Property } from '../../model';
import { getInnerText } from '../attribute';
import { parseSubelements } from './subelements';
import { IterateTableEntriesOptions, iterateTableEntries } from './iterate';
import { hasSubElements } from './predicates';

const parseTableEntry = (entry: HTMLTableRowElement): Property => {
  console.log(entry);
  const [name, description] = pipe(
    entry.querySelectorAll('td').values() as Iterable<HTMLTableRowElement>,
    (elements) => Array.from(elements),
    map(getInnerText),
  );
  console.log({ name, description });

  return { name, description };
};

const parseTableEntryWithSubElements = ([
  entry,
  subelements,
]: HTMLTableRowElement[]): NonPrimitiveProperty => {
  return {
    ...parseTableEntry(entry),
    type: 'non-primitive',
    subproperties: parseSubelements(subelements),
  };
};

export const parseTableEntries = (options?: IterateTableEntriesOptions) =>
  iterateTableEntries(options)((entry) =>
    hasSubElements(entry)
      ? parseTableEntryWithSubElements(entry)
      : parseTableEntry(entry.at(0)),
  );
