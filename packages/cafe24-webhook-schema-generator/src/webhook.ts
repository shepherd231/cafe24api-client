import { map, flatten } from 'fp-ts/Array';
import { pipe } from 'fp-ts/function';
import { Property } from 'cafe24api-schema-scraper';
import { parseLookupTable } from './lookup-table';
import { parseSampleDataTable } from './sample-data';

export interface WebhookInfo {
  eventId: number;
  name: string;
  description: string;
  properties: Property[];
}

export const getWebhookInfoList = (
  lookupRoot: HTMLElement,
  tableRoots: HTMLElement[],
): WebhookInfo[] => {
  const lookup = pipe(
    lookupRoot.querySelector('table') as HTMLTableElement,
    parseLookupTable,
  );

  return pipe(
    tableRoots,
    map((root) => root.querySelector('table') as HTMLTableElement),
    map(parseSampleDataTable({ lookup })),
    flatten,
  );
};
