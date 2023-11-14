import { camelCase, snakeCase } from 'change-case';

const typeOf = (value) => {
  if (Array.isArray(value)) return 'array';
  if (value === null) return 'null';
  return typeof value;
};

const convertToCase = (caseConverter) => {
  function objectConverter(value) {
    switch (typeOf(value)) {
      case 'object':
        return Object.keys(value).reduce(
          (acc, key) => ({
            ...acc,
            [caseConverter(key)]: objectConverter(value[key]),
          }),
          {},
        );
      case 'array':
        return value.map(objectConverter);
      default:
        return value;
    }
  }
  return objectConverter;
};

export const convertToCamelCase = convertToCase(camelCase);
export const convertToSnakeCase = convertToCase(snakeCase);
