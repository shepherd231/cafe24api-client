/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const ejs = require('ejs');
const Case = require('case');
const { targets, templatesPath } = require('./config');

const generateFromTemplate = async (
  event,
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
        event,
        kebabCase: Case.kebab,
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
      `pnpm cafe24-webhook-schema-generator run --url ${target.docsUrl} --output ${target.endpointsJSONPath}`,
    );
    if (execution.code !== 0) {
      shell.exit(execution.code);
    }
  }

  /**
   * @type {import('cafe24-webhook-schema-generator').WebhookInfo[]}
   */
  const events = require(target.endpointsJSONPath);

  for (const event of events) {
    await generateFromTemplate(
      event,
      target.fileTemplate,
      target.templateContext,
      target.fileOutputPath,
      `${Case.kebab(event.name)}.ts`,
    );
  }

  const filePath = path.resolve(target.fileOutputPath, 'index.ts');
  fs.writeFileSync(
    filePath,
    events
      .map((event) => `export * from './${Case.kebab(event.name)}';`)
      .join('\n'),
  );
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
