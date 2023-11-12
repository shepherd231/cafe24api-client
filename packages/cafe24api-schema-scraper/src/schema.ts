import { pipe } from 'fp-ts/function';
import { Property } from './model';
import { parseTableEntries } from './utils/table';
import { getAttribute } from './utils/attribute';

export interface SchemaInfo {
  /**
   * @description
   * Name of the schema.
   */
  name: string;
  /**
   * @description
   * List of properties of the schema.
   */
  schema: Property[];
}

/**
 * @description
 * Get schema information from the given schema section.
 *
 * In the context of Cafe24 API documentation, schema section is a section
 * that can be found with a selector `.page-wrapper > .content > section.endpoint.schema`
 * and that contains only 1 sub element which is `.description`.
 */
export const getSchemaInfo = (schemaSection: HTMLElement): SchemaInfo => {
  // `data-text` attribute at `section.endpoint.method > .description > h3`
  // contains "<schema-name> properties" string
  const title = pipe(
    schemaSection.querySelector('.description > h3') as HTMLHeadingElement,
    getAttribute('data-text'),
  );

  // Schema properties are listed in a table
  const properties = pipe(
    schemaSection.querySelector(
      '.description > .table-area > table',
    ) as HTMLTableElement,
    parseTableEntries({ omitHeaders: true }),
  );

  return { name: title, schema: properties };
};
