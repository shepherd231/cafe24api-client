import Case from 'case';

export const formatCamelCasedOptions = (options) => {
  if (!options?.fields) return options;
  return {
    ...options,
    fields: options?.fields?.map(Case.snake),
  };
};
