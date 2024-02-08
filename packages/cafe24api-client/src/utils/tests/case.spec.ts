/* eslint-disable jest/valid-title */
import { convertToCamelCase, convertToSnakeCase } from '../case';

const scenarios: {
  name: string;
  snakeCaseObj: Record<string, any>;
  camelCaseObj: Record<string, any>;
}[] = [
  {
    name: 'Case #1',
    snakeCaseObj: {
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
    },
    camelCaseObj: {
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
    },
  },
  {
    name: 'Case #2',
    camelCaseObj: {
      scripttags: [
        {
          shopNo: 1,
          scriptNo: '1',
          clientId: 'client-id',
          src: 'https://www.example.com/script.js',
          displayLocation: ['SOME_DISPLAY_LOCATION'],
          excludePath: null,
          skinNo: null,
          integrity: null,
          createdDate: '2021-01-01T00:00:00Z',
          updatedDate: '2021-01-01T00:00:00Z',
        },
      ],
    },
    snakeCaseObj: {
      scripttags: [
        {
          shop_no: 1,
          script_no: '1',
          client_id: 'client-id',
          src: 'https://www.example.com/script.js',
          display_location: ['SOME_DISPLAY_LOCATION'],
          exclude_path: null,
          skin_no: null,
          integrity: null,
          created_date: '2021-01-01T00:00:00Z',
          updated_date: '2021-01-01T00:00:00Z',
        },
      ],
    },
  },
];

describe('Case Converters', () => {
  describe('convertToCamelCase', () => {
    scenarios.forEach((scenario) => {
      it(scenario.name, () => {
        const output = convertToCamelCase(scenario.snakeCaseObj);
        expect(output).toEqual(scenario.camelCaseObj);
      });
    });
  });

  describe('objectToSnakeCase', () => {
    scenarios.forEach((scenario) => {
      it(scenario.name, () => {
        const output = convertToSnakeCase(scenario.camelCaseObj);
        expect(output).toEqual(scenario.snakeCaseObj);
      });
    });
  });
});
