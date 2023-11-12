export const getAttribute = (attr: string) => (element: HTMLElement) =>
  element.getAttribute(attr);

export const getAttributes = (attrs: string[]) => (element: HTMLElement) =>
  attrs.map((attr) => element.getAttribute(attr));

export const getInnerText = (element: HTMLElement) => element.innerText;
