import { pipe } from 'fp-ts/function';
import { map } from 'fp-ts/Array';
import { Property, isPrimitive } from '../model';
import { isCafe24Date, isCafe24Datetime, isCafe24Enum } from '../cafe24-types';

export interface ResponseInfo {
  /**
   * @description
   * Response parameters.
   */
  properties: Property[];
  /**
   * @description
   * Example response body.
   */
  example?: string;
}

/**
 * @todo
 * Since type inference from example value is not accurate,
 * we need to implement `repositionEndpointContents` function
 * which is located at `packages/cafe24api-schema-scraper/src/endpoint/reposition.ts`
 * to make sure every type is inferred accurately.
 *
 * @description
 * Infers type from the given example value.
 */
const inferType = (value: unknown): string => {
  if (Array.isArray(value)) return 'array';
  if (typeof value === 'string') {
    if (isCafe24Date(value)) return 'date';
    if (isCafe24Datetime(value)) return 'datetime';
    if (isCafe24Enum(value)) return 'enum';
  }
  if (value === null) return 'primitive';
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
