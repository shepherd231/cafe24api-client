import { pipe } from 'fp-ts/function';
import { map } from 'fp-ts/Array';
import { Property } from '../../model';
import { getInnerText } from '../attribute';

export const parseSubelements = (root: HTMLTableRowElement): Property[] => {
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
