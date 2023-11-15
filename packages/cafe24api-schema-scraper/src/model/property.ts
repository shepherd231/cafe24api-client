/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from '../cafe24-types';
/**
 * @description
 * Represents a primitive type.
 *
 * - string: {@link String}
 * - number: {@link Number}
 * - Cafe24Boolean: {@link Cafe24Boolean}
 * - Cafe24Enum: {@link Cafe24Enum}
 * - Cafe24Date: {@link Cafe24Date}
 * - Cafe24Datetime: {@link Cafe24Datetime}
 * - primitive: This type is like any, and used when the type cannot be inferred.
 */
type Primitive =
  | 'string'
  | 'number'
  | 'Cafe24Boolean'
  | 'Cafe24Enum'
  | 'Cafe24Date'
  | 'Cafe24Datetime'
  | 'primitive';

export const isPrimitive = (type: string): type is Primitive =>
  [
    'string',
    'number',
    'Cafe24Boolean',
    'Cafe24Enum',
    'Cafe24Date',
    'Cafe24Datetime',
    'primitive',
  ].includes(type);

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
  type: string;
  subproperties: Property[];
}
