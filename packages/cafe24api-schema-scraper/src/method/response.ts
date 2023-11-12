import { pipe } from 'fp-ts/function';
import { map } from 'fp-ts/Array';
import { Property, isPrimitive } from '../model';
import {
  isCafe24Boolean,
  isCafe24Date,
  isCafe24Datetime,
} from '../cafe24-types';

/**
 * @description
 * Infers type from the given example value.
 */
const inferType = (value: unknown): string => {
  if (Array.isArray(value)) return 'array';
  if (typeof value === 'string') {
    if (isCafe24Date(value)) return 'date';
    if (isCafe24Datetime(value)) return 'datetime';
    if (isCafe24Boolean(value)) return 'boolean';
  }
  return typeof value;
};

/**
 * @description
 * Parses example JSON shown as a response in Cafe24 API documentation,
 * and converts it to a list of properties.
 */
export const parseExampleJSONToProperties = (
  json: Record<string, any>,
): Property[] => {
  return pipe(
    json,
    Object.entries,
    map(([key, value]) => ({
      name: key,
      type: inferType(value),
      subproperties: !isPrimitive(inferType(value))
        ? parseExampleJSONToProperties(value)
        : undefined,
    })),
  );
};
