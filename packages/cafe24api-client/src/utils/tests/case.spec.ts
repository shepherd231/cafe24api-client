import { convertToCamelCase, convertToSnakeCase } from '../case';

describe('convertToCamelCase', () => {
  it('should convert object to camelCase', () => {
    const input = {
      foo_bar: 1,
      bar_baz: [
        {
          baz_qux: 3,
        },
        {
          qux_quux: '4',
          quux_quuz: undefined,
        },
      ],
      baz_qux: {
        qux_quux: null,
        quux_quuz: 4,
      },
    };

    const output = convertToCamelCase(input);

    expect(output).toEqual({
      fooBar: 1,
      barBaz: [
        {
          bazQux: 3,
        },
        {
          quxQuux: '4',
          quuxQuuz: undefined,
        },
      ],
      bazQux: {
        quxQuux: null,
        quuxQuuz: 4,
      },
    });
  });
});

describe('objectToSnakeCase', () => {
  it('should convert object to snake_case', () => {
    const input = {
      fooBar: 1,
      barBaz: [
        {
          bazQux: 3,
        },
        {
          quxQuux: '4',
          quuxQuuz: undefined,
        },
      ],
      bazQux: {
        quxQuux: null,
        quuxQuuz: 4,
      },
    };

    const output = convertToSnakeCase(input);

    expect(output).toEqual({
      foo_bar: 1,
      bar_baz: [
        {
          baz_qux: 3,
        },
        {
          qux_quux: '4',
          quux_quuz: undefined,
        },
      ],
      baz_qux: {
        qux_quux: null,
        quux_quuz: 4,
      },
    });
  });
});
