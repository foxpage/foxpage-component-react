const path = require('path');
const fs = require('fs');

const cwd = process.cwd();
const args = process.argv.slice(2);
const pkgPath = path.join(cwd, 'package.json');
const root = path.join(__dirname, '../');
const pkg = require(pkgPath);

async function main() {
  const {
    name,
    version
  } = pkg;
  const data = args.map(val => ({
    key: val.split(':')[0],
    value: val.split(':')[1]
  }));
  data.forEach(({ key, value }) => {
    const formatVal = value.replace(/\${version}/g, version).replace(/\${name}/g, name);
    pkg.foxpage[key] = formatVal;
  })
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}

main();
