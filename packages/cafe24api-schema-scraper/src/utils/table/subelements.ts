import { pipe } from 'fp-ts/function';
import { map } from 'fp-ts/Array';
import { Property } from '../../model';
import { getInnerText } from '../attribute';

const rootSelector = 'td > .card > div > .card-body > p';

/**
 * @todo
 * Implemenet functionality that it can traverse any depth of subelements.
 * There exists a case where subelements are nested more than 2 levels deep.
 *
 * For example, see: {@link https://developers.cafe24.com/docs/api/front/#create-a-shopping-cart}
 */
export const parseSubelements = (root: HTMLTableRowElement): Property[] => {
  return pipe(
    root.querySelectorAll(rootSelector).values() as Iterable<HTMLElement>,
    (elements) => Array.from(elements),
    map(getInnerText),
    map((row) => row.split('\n').map((s) => s.trim())),
    map(([name, ...descriptions]) => ({
      // There exists a case where `name` contains type information
      name: name.split(' ').at(0),
      type: name.includes('Array') ? 'any[]' : undefined,
      required: descriptions.includes('Required'),
      description: descriptions
        .filter((line) => line !== 'Required')
        .join('\n'),
    })),
  );
};
