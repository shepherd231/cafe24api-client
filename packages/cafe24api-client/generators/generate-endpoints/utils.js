/* eslint-disable @typescript-eslint/no-var-requires */

const Case = require('case');

const replaceAllMatches = (source, regex, replacer) => {
  let result = source;
  for (const match of source.matchAll(regex)) {
    result = result.replace(match[0], replacer(match));
  }
  return result;
};

const inferEffectiveOutputSchemaType = (method) => {
  const properties = method.response.properties;
  if (properties.length < 1) {
    return 'any';
  }

  const effectiveSchema = properties.find(
    (property) => property.name !== 'links',
  );
  if (!effectiveSchema) {
    throw new Error('Cannot find an effective schema for type declaration');
  }

  const schemaPropertyName = effectiveSchema.name;
  const outputIsArray = effectiveSchema.type === 'array';

  return (
    Case.pascal(method.id) +
    'Output' +
    `['${schemaPropertyName}']` +
    (outputIsArray ? '[number]' : '')
  );
};

const formatExampleString = (example, options) => {
  const { useCamelCase } = options || {};
  if (useCamelCase) {
    return replaceAllMatches(
      example,
      / ([a-z0-9]+[a-z0-9_]+):/g,
      ([, propname]) => ` ${Case.camel(propname)}:`,
    ).split('\n');
  } else {
    return example.split('\n');
  }
};

const writeIf = (condition, content) => {
  return condition ? content : '';
};

const formatPropertyType = (type) => {
  return (
    type?.replace('non-primitive', 'any')?.replace('primitive', 'any') ?? 'any'
  );
};

const formatRequestPath = (path) => {
  return path.replace('{', "${input['").replace('}', "']}");
};

module.exports = {
  replaceAllMatches,
  inferEffectiveOutputSchemaType,
  formatExampleString,
  writeIf,
  formatPropertyType,
  formatRequestPath,
};
