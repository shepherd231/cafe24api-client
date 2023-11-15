/**
 * @fileoverview
 * Post build (`babel src --out-dir dist/esm --copy-files`)
 * script for cafe24api-client esm.
 *
 * Adapted from dayjs build script.
 *
 * @see https://github.com/iamkun/dayjs/blob/HEAD/build/esm.js
 */

const fs = require('fs');
const { DESTINATION, TYPES } = require('./values');
const path = require('path');
const join = path.join;
const util = require('util');
const { ncp } = require('ncp');

const { promisify } = util;

const promisifyReadDir = promisify(fs.readdir);
const promisifyRename = promisify(fs.rename);

const typeFileExt = '.d.ts';

const moveTypeFileOfEndpoint = async (prefix, endpoint) => {
  const typeFilePath = join(DESTINATION, prefix, `${endpoint}${typeFileExt}`);
  const targetPath = join(DESTINATION, prefix, endpoint, `index${typeFileExt}`);
  await promisifyRename(typeFilePath, targetPath);
};

const moveTypeFileOfEndpoints = async (prefix, excludes = []) => {
  let endpoints = await promisifyReadDir(join(DESTINATION, prefix));
  endpoints = endpoints.filter((directory) => !excludes.includes(directory));
  await Promise.all(
    endpoints.map((endpoint) => moveTypeFileOfEndpoint(prefix, endpoint)),
  );
};

(async () => {
  try {
    // Copy type definition files recursively
    await promisify(ncp)(TYPES, join(DESTINATION, 'esm'));

    // As folder structure of `types` differ from that of `src`
    // in a way that each endpoint is a file of that endpoint name in
    // types but same is a folder containing `index.js` in src
    // which lefts type definition files of endpoints in wrong places:
    // type definition files of endpoints are placed at the same level
    // with corresponding folders containing `index.js`.
    //
    // To fix this, this script moves type definition files of endpoints
    // to corresponding folders containing `index.js` so that it locates
    // same level with `index.js`.
    await moveTypeFileOfEndpoints('esm/admin/endpoints', ['camel-case']);
    await moveTypeFileOfEndpoints('esm/admin/endpoints/camel-case');
    await moveTypeFileOfEndpoints('esm/front/endpoints', ['camel-case']);
    await moveTypeFileOfEndpoints('esm/front/endpoints/camel-case');
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  }
})();
