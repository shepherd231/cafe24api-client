/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');

const sourcePath = path.resolve(__dirname, '../../src');
const typedefPath = path.resolve(__dirname, '../../types');
const templatesPath = path.resolve(__dirname, 'templates');

const readTemplate = (templatePath) =>
  fs.readFileSync(path.resolve(templatesPath, templatePath), 'utf-8');

const snakeCaseImplTemplate = readTemplate('endpoint.impl.ejs');
const camelCaseImplTemplate = readTemplate('endpoint.camel-case.impl.ejs');
const typedefTemplate = readTemplate('endpoint.typedef.ejs');

const targets = [
  {
    id: 'admin',
    docsUrl: 'https://developers.cafe24.com/docs/api/admin/',
    endpointsJSONPath: path.resolve(__dirname, 'gen/admin-endpoints.json'),
    implOutputPath: path.resolve(sourcePath, 'admin/endpoints'),
    typedefOutputPath: path.resolve(typedefPath, 'admin/endpoints'),
    implTemplate: snakeCaseImplTemplate,
    typedefTemplate,
    templateContext: {
      useCamelCase: false,
    },
  },
  {
    id: 'admin-camel-case',
    docsUrl: 'https://developers.cafe24.com/docs/api/admin/',
    endpointsJSONPath: path.resolve(__dirname, 'gen/admin-endpoints.json'),
    implOutputPath: path.resolve(sourcePath, 'admin/endpoints/camel-case'),
    typedefOutputPath: path.resolve(typedefPath, 'admin/endpoints/camel-case'),
    implTemplate: camelCaseImplTemplate,
    typedefTemplate,
    templateContext: {
      useCamelCase: true,
    },
  },
  {
    id: 'front',
    docsUrl: 'https://developers.cafe24.com/docs/api/front/',
    endpointsJSONPath: path.resolve(__dirname, 'gen/front-endpoints.json'),
    implOutputPath: path.resolve(sourcePath, 'front/endpoints'),
    typedefOutputPath: path.resolve(typedefPath, 'front/endpoints'),
    implTemplate: snakeCaseImplTemplate,
    typedefTemplate,
    templateContext: {
      useCamelCase: false,
    },
  },
  {
    id: 'front-camel-case',
    docsUrl: 'https://developers.cafe24.com/docs/api/front/',
    endpointsJSONPath: path.resolve(__dirname, 'gen/front-endpoints.json'),
    implOutputPath: path.resolve(sourcePath, 'front/endpoints/camel-case'),
    typedefOutputPath: path.resolve(typedefPath, 'front/endpoints/camel-case'),
    implTemplate: camelCaseImplTemplate,
    typedefTemplate,
    templateContext: {
      useCamelCase: true,
    },
  },
];

module.exports = {
  sourcePath,
  typedefPath,
  templatesPath,
  targets,
};
