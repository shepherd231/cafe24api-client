import { pipe } from 'fp-ts/function';
import { map, reduce } from 'fp-ts/Array';
import { Property, getInnerText } from 'cafe24api-schema-scraper';

const parseEntry = (entry: HTMLTableRowElement): Property => {
  const [name, ...descriptions] = pipe(
    entry.querySelectorAll('td').values() as Iterable<HTMLTableRowElement>,
    (elements) => Array.from(elements),
    map(getInnerText),
  );
  return {
    name,
    description: descriptions.join('\n'),
  };
};

export const parseLookupTable = (
  root: HTMLTableElement,
): Record<string, Property> => {
  return pipe(
    root
      .querySelectorAll('tbody > tr')
      .values() as Iterable<HTMLTableRowElement>,
    (elements) => Array.from(elements),
    map(parseEntry),
    reduce({}, (acc, property) => ({ ...acc, [property.name]: property })),
  );
};
