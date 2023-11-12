import { pipe } from 'fp-ts/function';
import { groupByPredicate } from '../utils/array';

/**
 * @description
 * Endpoint section list.
 *
 * This corresponds to every `section` elements
 * in a first level item in TOC.
 *
 * It is composed with:
 * - title (at index 0),
 * - schema definitions (at index 1),
 * - and methods (rest of the items).
 */
export type EndpointSections = HTMLElement[];

/**
 * @description
 * Check if the given element is a title section.
 *
 * In the context of Cafe24 API documentation, title section is a section
 * that can be found with a selector `.page-wrapper > .content > section.endpoint.title`.
 */
const isTitle = (element: HTMLElement) => element.classList.contains('title');

/**
 * @description
 * Get endpoint sections list from the documentation body.
 *
 * @param root Root element to retrieve endpoint sections from.
 * @yields List of endpoint sections.
 */
export const getEndpointSectionsList = (
  root: HTMLElement,
): EndpointSections[] => {
  return pipe(
    root.querySelectorAll('section.endpoint').values() as Iterable<HTMLElement>,
    Array.from,
    // Group sections considering title sections as separators
    groupByPredicate(isTitle),
  );
};
