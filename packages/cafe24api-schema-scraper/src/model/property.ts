// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cafe24Boolean, Cafe24Date, Cafe24Datetime } from '../cafe24-types';
/**
 * @description
 * Represents a primitive type.
 *
 * - string: {@link String}
 * - number: {@link Number}
 * - boolean: {@link Cafe24Boolean}
 * - date: {@link Cafe24Date}
 * - datetime: {@link Cafe24Datetime}
 * - primitive: This type is like any, and used when the type cannot be inferred.
 */
type Primitive =
  | 'string'
  | 'number'
  | 'boolean'
  | 'date'
  | 'datetime'
  | 'primitive';

/**
 * @description
 * Represents a non-primitive type.
 *
 * - object: {@link Record<string, any>}
 * - array: {@link Array}
 * - non-primitive: This type is like any, and used when the type cannot be inferred.
 */
type NonPrimitive = 'array' | 'object' | 'non-primitive';

export const isPrimitive = (type: string): type is Primitive =>
  ['string', 'number', 'boolean', 'date', 'datetime', 'primitive'].includes(
    type,
  );

export class Property {
  /**
   * @description
   * Name of the property.
   */
  name: string;
  /**
   * @description
   * Description of the property.
   */
  description?: string;
  /**
   * @description
   * Whether the property is required or not.
   */
  required?: boolean;
  /**
   * @description
   * Type of the property.
   */
  type?: string;
  /**
   * @description
   * Properties of the object in case the type is object or array.
   */
  subproperties?: Property[];

  static isPrimitive(property: any): property is PrimitiveProperty {
    return isPrimitive(property.type);
  }

  static isNonPrimitive(property: any): property is NonPrimitiveProperty {
    return !Property.isPrimitive(property);
  }
}

export class PrimitiveProperty extends Property {
  type: Primitive;
}

export class NonPrimitiveProperty extends Property {
  type: NonPrimitive;
  subproperties: Property[];
}
