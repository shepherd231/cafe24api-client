/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');

const sourcePath = path.resolve(__dirname, '../../src');
const templatesPath = path.resolve(__dirname, 'templates');

const readTemplate = (templatePath) =>
  fs.readFileSync(path.resolve(templatesPath, templatePath), 'utf-8');

const eventTemplate = readTemplate('event.ejs');

const targets = [
  {
    id: 'webhook-sample-data',
    docsUrl:
      'https://developers.cafe24.com/app/front/app/develop/webhook/sample',
    endpointsJSONPath: path.resolve(__dirname, 'gen/webhook-info.json'),
    fileOutputPath: path.resolve(sourcePath, 'event'),
    fileTemplate: eventTemplate,
  },
  {
    id: 'extra-webhook-data',
    endpointsJSONPath: path.resolve(__dirname, 'gen/extra-webhook-info.json'),
    fileOutputPath: path.resolve(sourcePath, 'event'),
    fileTemplate: eventTemplate,
  },
];

module.exports = {
  sourcePath,
  templatesPath,
  targets,
};
