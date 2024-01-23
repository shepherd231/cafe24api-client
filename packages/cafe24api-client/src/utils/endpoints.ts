import { convertToSnakeCase } from './case';

export const optionsToSnakeCase = (options) => ({
  ...options,
  fields: convertToSnakeCase(options?.fields),
});
