type Primitive = 'string' | 'number' | 'boolean' | 'date' | 'datetime';

export const isPrimitive = (type: string): type is Primitive =>
  ['string', 'number', 'boolean', 'date', 'datetime'].includes(type);

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
    return isPrimitive(property.type) || property.type === 'primitive';
  }

  static isNonPrimitive(property: any): property is NonPrimitiveProperty {
    return !Property.isPrimitive(property);
  }
}

export class PrimitiveProperty extends Property {
  type: Primitive | 'primitive';
}

export class NonPrimitiveProperty extends Property {
  type: 'object' | 'array' | 'non-primitive';
  subproperties: Property[];
}
