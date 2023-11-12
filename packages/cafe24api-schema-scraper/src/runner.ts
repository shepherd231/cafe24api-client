import { map } from 'fp-ts/Array';
import { pipe } from 'fp-ts/function';
import { getEndpointSectionsList } from './endpoint/sections';
import { getEndpointInfo } from './endpoint';

/**
 * @description
 * Run the web scraper
 *
 * Note that this script runs on browser execution context
 */
export const run = () => {
  try {
    return pipe(
      document.documentElement,
      getEndpointSectionsList,
      map(getEndpointInfo),
    );
  } catch (error) {
    console.error(error);
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-debugger
      debugger;
    }
  }
};
