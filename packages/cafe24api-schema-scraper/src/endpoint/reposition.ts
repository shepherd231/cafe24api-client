import { pipe } from 'fp-ts/function';
import { some, none, match } from 'fp-ts/Option';
import { map } from 'fp-ts/Array';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cafe24Boolean, Cafe24Enum } from '../cafe24-types';
import { RequestInfo } from '../method/request';
import { ResponseInfo } from '../method/response';
import { SchemaInfo } from '../schema';
import { Property } from '../model';

interface AttachSubpropertiesOptions {
  selector: string;
  reference: Record<string, Property>;
}

/**
 * @description
 * Attach given key to property if exists at {@link reference}
 */
const attach =
  (key: string) =>
  ({ reference, selector }: AttachSubpropertiesOptions) =>
  (property: Property): Property => {
    return {
      ...property,
      [key]: pipe(
        reference[property[selector]],
        (ref) => (ref ? some(ref) : none),
        match(
          () => null,
          (ref) => ref[key],
        ),
      ),
    };
  };

/**
 * @todo Implement this function fully
 *
 * @description
 * Reposition contents of given endpoint to appropriate places.
 *
 * This function does the following:
 * 1. Assign subproperties' info referring {@link requestInfo}
 *    to {@link schemaInfo} (name & description) and {@link responseInfo} (description only)
 * 2. Infer correct types of response properties at {@link responseInfo}
 *    referring to each property description of {@link schemaInfo}
 *
 *    Currently this process does the following:
 *
 *    1. Check if a property {@link Cafe24Boolean} is actually {@link Cafe24Enum}.
 *       There's some cases where the field recieves 'T', 'F', and other uppercase letters like 'M'.
 *    2. Check if a property that has any type (e.g. primitive type)
 *       due to null example value at enum type is actually {@link Cafe24Enum}
 *       by checking {@link schemaInfo} if it has description of enum values.
 *       This can be found by checking if the description has a line matching the regex: `^[A-Z]{1}: .+$`
 * 3. Assign type values from {@link responseInfo} to {@link requestInfo} and {@link schemaInfo}
 */
export const repositionEndpointContents = (
  schemaInfo: SchemaInfo,
  requestInfo: RequestInfo,
  responseInfo: ResponseInfo,
) => {
  // ========================================================================
  // Step #1
  // ========================================================================

  schemaInfo.properties = pipe(
    schemaInfo.properties,
    map(
      attach('subproperties')({
        reference: requestInfo.properties.reduce(
          (acc, property) => ({ ...acc, [property.name]: property }),
          {},
        ),
        selector: 'name',
      }),
    ),
  );

  responseInfo.properties = pipe(responseInfo.properties);

  // ========================================================================
  // Step #2
  // ========================================================================

  // ========================================================================
  // Step #3
  // ========================================================================
};
