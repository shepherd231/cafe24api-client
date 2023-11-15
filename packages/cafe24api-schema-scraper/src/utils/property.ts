import { Property } from '../model';

/**
 * @description
 * Reposition contents of given property
 * from parameter table (e.g. request parameter table)
 * which is in raw form just after scraping
 * to the appropriate fields.
 */
export const repositionPropertyContents = (property: Property): Property => {
  // `name` corresponds to `Parameter` column
  // in the documentation, and it often contains
  // additional information other than actual parameter name,
  // here we call it `metadata`.
  const [name, ...metadata] = property.name
    .replace('embed', '@embed')
    .replace('Required', '@required')
    .split('\n')
    .map((s) => s.trim());

  // `metadata` contains "@required" string
  // if the parameter is required.
  const required = property.required ?? metadata.includes('@required');

  // It's appropriate to append `metadata` to `description` field
  // as its role is to describe the parameter.
  //
  // Also, `DEFAULT` string is replaced with `@default` string
  // as it's more appropriate to use in JSDoc.
  //
  // In addition, we replace too long lines to a single line break
  let description = property.description
    .replace('DEFAULT', '@default')
    .concat('\n\n', metadata.join('\n'))
    .replace('\n\n\n\n\n', '\n\n')
    .replace('\n\n\n\n', '\n\n')
    .replace('\n\n\n', '\n\n');

  if (description.split('\n').filter((s) => s.length > 0).length === 0) {
    description = null;
  }

  // Recurse on subproperties if needed.
  const subproperties = property.subproperties?.map(repositionPropertyContents);

  return {
    ...property,
    name,
    required,
    description,
    subproperties,
  };
};
