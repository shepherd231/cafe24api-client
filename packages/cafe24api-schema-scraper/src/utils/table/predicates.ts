/**
 * @description
 * Indicates the table entry.
 *
 * If the table entry has sub elements, it includes two elements.
 * Otherwise, it includes only one element.
 */
export type TableEntry = HTMLTableRowElement[];

export const hasSubElements = (entry: TableEntry): boolean =>
  Array.isArray(entry) && entry.length === 2;

export const isSubElements = (element: HTMLTableRowElement) =>
  element.getAttribute('colspan') === '2';
