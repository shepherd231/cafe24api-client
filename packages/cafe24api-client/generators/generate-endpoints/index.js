/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const ejs = require('ejs');
const Case = require('case');
const { targets, templatesPath } = require('./config');
const {
  replaceAllMatches,
  inferEffectiveOutputSchemaType,
  formatExampleString,
  writeIf,
  formatPropertyType,
  formatRequestPath,
} = require('./utils');

const generateFromTemplate = async (
  docsUrl,
  endpoint,
  template,
  templateContext,
  outputPrefix,
  filepath,
) => {
  const filePath = path.resolve(outputPrefix, filepath);
  console.log(`Generating ${filePath}`);
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }
  fs.writeFileSync(
    filePath,
    ejs.render(
      template,
      {
        docsUrl,
        endpoint,
        camelCase: Case.camel,
        pascalCase: Case.pascal,
        replaceAllMatches,
        inferEffectiveOutputSchemaType,
        formatExampleString,
        formatPropertyType,
        formatRequestPath,
        writeIf,
        ...templateContext,
      },
      {
        root: templatesPath,
      },
    ),
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
      target.docsUrl,
      endpoint,
      target.implTemplate,
      target.templateContext,
      target.implOutputPath,
      `${endpoint.id}/index.js`,
    );
    await generateFromTemplate(
      target.docsUrl,
      endpoint,
      target.typedefTemplate,
      target.templateContext,
      target.typedefOutputPath,
      `${endpoint.id}.d.ts`,
    );
  }
};

(async () => {
  try {
    for (const target of targets) {
      await generate(target);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
