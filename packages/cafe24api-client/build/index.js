/**
 * @fileoverview
 * Build script for cafe24api-client.
 * Adapted from dayjs build script.
 *
 * @see https://github.com/iamkun/dayjs/blob/HEAD/build/index.js
 */

const rollup = require('rollup');
const configFactory = require('./rollup.config');
const { SOURCE, DESTINATION, TYPES } = require('./values');
const fs = require('fs');
const util = require('util');
const path = require('path');
const join = path.join;
const { ncp } = require('ncp');

const { promisify } = util;

const promisifyReadDir = promisify(fs.readdir);

const build = async (option) => {
  const bundle = await rollup.rollup(option.input);
  await bundle.write(option.output);
};

const buildEndpoint = async (prefix, endpoint) => {
  await build(
    configFactory({
      input: join(SOURCE, prefix, endpoint, 'index'),
      fileName: join(DESTINATION, prefix, `${endpoint}.js`),
      name: `cafe24api-client-endpoint-${endpoint}`,
    }),
  );
};

const buildEndpoints = async (prefix, excludes = []) => {
  let endpoints = await promisifyReadDir(join(SOURCE, prefix));
  endpoints = endpoints.filter((directory) => !excludes.includes(directory));
  await Promise.all(
    endpoints.map((endpoint) => buildEndpoint(prefix, endpoint)),
  );
};

(async () => {
  try {
    // Build endpoints seperately
    await buildEndpoints('admin/endpoints', ['camel-case']);
    await buildEndpoints('admin/endpoints/camel-case');
    await buildEndpoints('front/endpoints', ['camel-case']);
    await buildEndpoints('front/endpoints/camel-case');

    // Build main entry point
    await build(
      configFactory({
        input: join(SOURCE, 'index.js'),
        fileName: join(DESTINATION, 'index.js'),
      }),
    );

    // Copy type definition files recursively
    await promisify(ncp)(TYPES, DESTINATION);
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  }
})();
