/**
 * @fileoverview
 * Post build (`babel src --out-dir dist/esm --copy-files`)
 * script for cafe24api-client esm.
 *
 * Adapted from dayjs build script.
 *
 * @see https://github.com/iamkun/dayjs/blob/HEAD/build/esm.js
 */

const { readdir, rename, copyFileSync } = require('fs');
const { DESTINATION, TYPES } = require('./values');
const path = require('path');
const join = path.join;
const util = require('util');
const { ncp } = require('ncp');
const { execSync } = require('child_process');

const { promisify } = util;

const promisifyReadDir = promisify(readdir);
const promisifyRename = promisify(rename);

const typeFileExt = '.d.ts';

const moveTypeFileOfEndpoint = async (prefix, endpoint) => {
  const typeFilePath = join(DESTINATION, prefix, `${endpoint}${typeFileExt}`);
  const targetPath = join(DESTINATION, prefix, endpoint, `index${typeFileExt}`);
  await promisifyRename(typeFilePath, targetPath);
};

const moveTypeFileOfEndpoints = async (prefix, excludes = []) => {
  let endpoints = await promisifyReadDir(join(DESTINATION, prefix), {
    withFileTypes: true,
  });
  endpoints = endpoints
    .filter((directory) => directory.isDirectory())
    .map(({ name }) => name)
    .filter((dirname) => !excludes.includes(dirname));
  await Promise.all(
    endpoints.map((endpoint) => moveTypeFileOfEndpoint(prefix, endpoint)),
  );
};

(async () => {
  try {
    // Copy source files to dist/esm
    execSync(
      `babel src \
        --out-dir dist/esm \
        --copy-files \
        --extensions .ts,.js,.tsx,.jsx,.cjs,.mjs`,
      { stdio: 'inherit' },
    );

    // Copy `index.d.ts` to `dist/esm`
    //
    // This assumes that `index.d.ts` is already generated
    // by `tsc` command from `build/index.js`.
    copyFileSync(
      join(DESTINATION, 'index.d.ts'),
      join(DESTINATION, 'esm', 'index.d.ts'),
    );

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
