import { Property } from '../model';

/**
 * @description
 * Relocate contents of given property
 * from request parameter table
 * which is in raw form just after scraping
 * to the appropriate fields.
 */
export const relocatePropertyContents = (property: Property): Property => {
  // `name` corresponds to `Parameter` column
  // in the documentation, and it often contains
  // additional information other than actual parameter name,
  // here we call it `metadata`.
  const [name, ...metadata] = property.name.split('\n').map((s) => s.trim());

  // `metadata` contains "Required" string
  // if the parameter is required.
  const required = metadata.includes('Required');

  // It's appropriate to append `metadata` to `description` field
  // as its role is to describe the parameter.
  //
  // Also, `DEFAULT` string is replaced with `@default` string
  // as it's more appropriate to use in JSDoc.
  const description = property.description
    .replace('DEFAULT', '@default')
    .concat('\n\n', metadata.filter((s) => s !== 'Required').join('\n'));

  return {
    ...property,
    name,
    required,
    description,
  };
};
