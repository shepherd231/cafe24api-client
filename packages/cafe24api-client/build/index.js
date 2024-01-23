/**
 * @fileoverview
 * Build script for cafe24api-client.
 * Adapted from dayjs build script.
 *
 * @see https://github.com/iamkun/dayjs/blob/HEAD/build/index.js
 */

const rollup = require('rollup');
const { readdir, readFileSync, writeFileSync } = require('fs');
const util = require('util');
const { join } = require('path');
const { execSync } = require('child_process');
const { ncp } = require('ncp');
const { rimrafSync } = require('rimraf');
const configFactory = require('./rollup.config');
const { SOURCE, DESTINATION, TYPES } = require('./values');

const { promisify } = util;
const promisifyReadDir = promisify(readdir);

const build = async (option) => {
  const bundle = await rollup.rollup(option.input);
  await bundle.write(option.output);
};

const buildEndpoint = async (prefix, endpoint) => {
  await build(
    configFactory.source({
      input: join(SOURCE, prefix, endpoint, 'index'),
      fileName: join(DESTINATION, prefix, `${endpoint}.js`),
      name: `cafe24api-client-endpoint-${endpoint}`,
    }),
  );
};

const buildEndpoints = async (prefix, excludes = []) => {
  let endpoints = await promisifyReadDir(join(SOURCE, prefix));
  // Note that we expect only directories, not files in `join(SOURCE, prefix)`
  endpoints = endpoints.filter((directory) => !excludes.includes(directory));
  await Promise.all(
    endpoints.map((endpoint) => buildEndpoint(prefix, endpoint)),
  );
};

const wrapDefsAsModule = (option) => {
  const { fileName, packageName = 'cafe24api-client' } = option;
  const dtsCodelines = readFileSync(fileName, 'utf-8').split('\n');

  // Extract import statements from the file
  const imports = dtsCodelines.filter((line) => line.startsWith('import'));
  const others = dtsCodelines.filter((line) => !line.startsWith('import'));

  // Wrap the non-imports with a module with the package name
  const wrapped = [
    ...imports,
    '',
    `declare module '${packageName}' {`,
    ...others
      .map((line) =>
        line.startsWith('declare ') ? line.replace('declare ', '') : line,
      )
      .map((line) => `    ${line}`),
    '}',
  ];

  // Write the wrapped code back to the file
  writeFileSync(fileName, wrapped.join('\n'));
};

(async () => {
  try {
    // Build main entry point
    await build(
      configFactory.source({
        input: join(SOURCE, 'index.ts'),
        fileName: join(DESTINATION, 'index.js'),
      }),
    );

    // Compile type definition files from source
    execSync(
      `tsc src/index.ts \
        --declaration \
        --emitDeclarationOnly \
        --esModuleInterop \
        --target esnext \
        --module commonjs \
        --outDir dist/types`,
      { stdio: 'inherit' },
    );

    // Build merged type definition file
    await build(
      configFactory.dts({
        input: join(DESTINATION, 'types/index.d.ts'),
        fileName: join(DESTINATION, 'index.d.ts'),
      }),
    );

    // Wrap merged type definition file with package name 'cafe24api-client'
    wrapDefsAsModule({
      fileName: join(DESTINATION, 'index.d.ts'),
      packageName: 'cafe24api-client',
    });

    // Remove type definition files generated from source
    rimrafSync(join(DESTINATION, 'types'));

    // Build endpoints seperately
    await buildEndpoints('admin/endpoints', ['camel-case']);
    await buildEndpoints('admin/endpoints/camel-case');
    await buildEndpoints('front/endpoints', ['camel-case']);
    await buildEndpoints('front/endpoints/camel-case');

    // Copy type definition files recursively
    await promisify(ncp)(TYPES, DESTINATION);
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  }
})();
