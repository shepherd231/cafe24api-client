export const raise = (error: any) => {
  throw error;
};

export class TagNotFoundError extends Error {
  constructor(tagName: string) {
    super(`No ${tagName} tag found`);
  }
}
