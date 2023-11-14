/**
 * @fileoverview
 * Build script for cafe24api-client.
 * Adapted from dayjs build script.
 *
 * @see https://github.com/iamkun/dayjs/blob/HEAD/build/index.js
 */

const rollup = require('rollup');
const configFactory = require('./rollup.config');
const fs = require('fs');
const util = require('util');
const path = require('path');
const join = path.join;
const { ncp } = require('ncp');

const { promisify } = util;

const promisifyReadDir = promisify(fs.readdir);

async function build(option) {
  const bundle = await rollup.rollup(option.input);
  await bundle.write(option.output);
}

const DESTINATION = 'dist';

const buildEndpoint = async (prefix, endpoint) => {
  await build(
    configFactory({
      input: join(__dirname, '../src', prefix, endpoint, 'index'),
      fileName: join(__dirname, `../${DESTINATION}`, prefix, `${endpoint}.js`),
      name: `cafe24api-client-endpoint-${endpoint}`,
    }),
  );
};

const buildEndpoints = async (prefix, excludes = []) => {
  let endpoints = await promisifyReadDir(join(__dirname, '../src', prefix));
  endpoints = endpoints.filter((directory) => !excludes.includes(directory));
  await Promise.all(
    endpoints.map((endpoint) => buildEndpoint(prefix, endpoint)),
  );
};

(async () => {
  try {
    await buildEndpoints('admin/endpoints', ['camel-case']);
    await buildEndpoints('admin/endpoints/camel-case');
    await buildEndpoints('front/endpoints', ['camel-case']);
    await buildEndpoints('front/endpoints/camel-case');

    await build(
      configFactory({
        input: join(__dirname, '../src/index.js'),
        fileName: join(__dirname, `../${DESTINATION}/cafe24api-client.min.js`),
      }),
    );

    await promisify(ncp)(
      join(__dirname, '../types/'),
      join(__dirname, `../${DESTINATION}`),
    );
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  }
})();
