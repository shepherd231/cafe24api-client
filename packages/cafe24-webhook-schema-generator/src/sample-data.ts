import { pipe } from 'fp-ts/function';
import { map } from 'fp-ts/Array';
import { some, none, match } from 'fp-ts/Option';
import {
  Property,
  getInnerText,
  parseExampleJSONToProperties,
} from 'cafe24api-schema-scraper';
import { WebhookInfo } from './webhook';
import { eventScopeTable } from './scope-table';
import { nameTable } from './name-table';

const isValidJSONString = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
};

const permissionDocString = (permissions?: string[]) =>
  permissions
    ? `
Required permissions:
${permissions.map((permission) => `- ${permission}`).join('\n')}
`
    : '';

interface ParseSampleDataTableOptions {
  lookup: Record<string, Property>;
}

export const parseSampleDataTable = ({
  lookup,
}: ParseSampleDataTableOptions) => {
  const editWithLookup =
    (attribute: string) =>
    (editor: (lookup: Record<string, Property>, property: Property) => any) => {
      return (property: Property): Property => {
        return {
          ...property,
          [attribute]: editor(lookup, property),
          subproperties: property.subproperties?.map(
            editWithLookup(attribute)(editor),
          ),
        };
      };
    };

  const parseEntry = (entry: HTMLTableRowElement): WebhookInfo => {
    const [eventId, description, exampleCode] = pipe(
      entry.querySelectorAll('td').values() as Iterable<HTMLElement>,
      Array.from,
      map(getInnerText),
    );
    const properties = pipe(
      isValidJSONString(exampleCode) ? some(exampleCode) : none,
      match(
        /**
         * @description
         * There exists some example code sections which is merged
         * vertically with the previous row, resulting in empty
         * example code for the current row. (e.g. event id 90001 and 90002)
         *
         * Also, there exists some example code sections which contains
         * invalid JSON string. (e.g. event id 90031)
         *
         * For now, we just ignore those rows and fix it manually.
         *
         * @todo
         * Fix those issues
         */
        () => [] as Property[],
        (code) =>
          pipe(
            code,
            JSON.parse,
            parseExampleJSONToProperties,
            map(
              editWithLookup('description')(
                (lookup, property) =>
                  lookup[property.name]?.description ?? property.description,
              ),
            ),
            map((property) => ({ ...property, required: true })),
          ),
      ),
    );
    return {
      eventId: Number(eventId),
      name: nameTable[eventId],
      description: description
        ?.concat('\n')
        ?.concat(permissionDocString(eventScopeTable[eventId])),
      properties,
    };
  };

  return (root: HTMLTableElement): WebhookInfo[] => {
    return pipe(
      root
        .querySelectorAll('tbody > tr')
        .values() as Iterable<HTMLTableRowElement>,
      Array.from,
      map(parseEntry),
    );
  };
};
