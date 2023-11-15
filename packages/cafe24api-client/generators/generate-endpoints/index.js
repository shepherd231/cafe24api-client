/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const ejs = require('ejs');
const { targets } = require('./config');
const { replaceAllMatches } = require('./utils');

let camelCase;
let pascalCase;

const generateFromTemplate = async (endpoint, ext, outputPrefix, template) => {
  const endpointImplPath = path.resolve(
    outputPrefix,
    endpoint.id,
    `index.${ext}`,
  );
  fs.writeFileSync(
    endpointImplPath,
    ejs.render(template, {
      endpoint,
      camelCase,
      pascalCase,
      replaceAllMatches,
    }),
  );
};

const generate = async (target) => {
  if (!fs.existsSync(target.endpointsJSONPath)) {
    fs.mkdirSync(path.dirname(target.endpointsJSONPath), { recursive: true });
    const execution = shell.exec(
      `pnpm cafe24api-schema-scraper run --url ${target.docsUrl} --output ${target.endpointsJSONPath}`,
    );
    if (execution.code !== 0) {
      shell.exit(execution.code);
    }
  }

  /**
   * @type {import('cafe24api-schema-scraper').EndpointInfo[]}
   */
  const endpoints = require(target.endpointsJSONPath);

  for (const endpoint of endpoints) {
    await generateFromTemplate(
      endpoint,
      'js',
      target.implOutputPath,
      target.implTemplate,
    );
    await generateFromTemplate(
      endpoint,
      'd.ts',
      target.typedefOutputPath,
      target.typedefTemplate,
    );
  }
};

(async () => {
  try {
    const changeCase = await import('change-case');
    camelCase = changeCase.camelCase;
    pascalCase = changeCase.pascalCase;
    for (const target of targets) {
      await generate(target);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
