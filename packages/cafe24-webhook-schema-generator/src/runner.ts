import { reverse } from 'fp-ts/Array';
import { pipe } from 'fp-ts/function';
import { getWebhookInfoList } from './webhook';

/**
 * @description
 * Run the web scraper
 *
 * Note that this script runs on browser execution context
 */
export const run = () => {
  try {
    // Since the documentation page have bit weird html structure,
    // we need to manually select the elements
    const appEventTable = document.querySelector(
      '#title1 > .mEditBoard',
    ) as HTMLElement;
    const [appEventLookup, ...shopEventElements] = pipe(
      document
        .querySelectorAll('#title2 > .mEditBoard')
        .values() as Iterable<HTMLElement>,
      (elements) => Array.from(elements),
    );
    const [shopEventLookup, ...shopEventTables] = pipe(
      shopEventElements,
      reverse,
      (elements) => [elements.at(0), ...elements.slice(1).reverse()],
    );

    // Get the webhook info list
    return [
      ...getWebhookInfoList(appEventLookup, [appEventTable]),
      ...getWebhookInfoList(shopEventLookup, shopEventTables),
    ];
  } catch (error) {
    console.error(error);
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-debugger
      debugger;
    }
  }
};
