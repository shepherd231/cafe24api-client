/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const url = 'https://developers.cafe24.com/docs/api/admin/';

const outputPath = path.resolve(__dirname, 'gen/admin-endpoints.json');

if (!fs.existsSync(outputPath)) {
  const execution = shell.exec(
    `pnpm cafe24api-schema-scraper run --url ${url} --output ${outputPath}`,
  );

  if (execution.code !== 0) {
    shell.exit(execution.code);
  }
}

/**
 * @type {import('cafe24api-schema-scraper').EndpointInfo[]}
 */
const endpoints = require(outputPath);

for (const endpoint of endpoints) {
}
