/* eslint-disable @typescript-eslint/no-var-requires */

const { execSync } = require('child_process');
const { readFileSync } = require('fs');

const getLatestVersion = (packageName) => {
  try {
    return execSync(`npm view ${packageName} version`, { encoding: 'utf-8' });
  } catch (error) {
    return '0.0.0';
  }
};

const main = () => {
  console.log('Checking if we need to publish a new version...');

  const packageJsonPath = process.argv[2];
  const packageJson = JSON.parse(
    readFileSync(packageJsonPath, { encoding: 'utf-8' }),
  );

  const currentVersion = packageJson.version;
  const latestVersion = getLatestVersion(packageJson.name);

  console.log(`Current version: ${currentVersion}`);
  console.log(`Latest version: ${latestVersion}`);

  // We need stringified version of the boolean value
  // to use it in bash scripts
  const publishIsNeeded = String(currentVersion !== latestVersion);

  console.log(`Publish needed: ${publishIsNeeded}`);

  return publishIsNeeded;
};

console.log(main());
