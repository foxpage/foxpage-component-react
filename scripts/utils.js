const path = require('path');
const { execSync } = require('child_process');

const log = console.log.bind(console);
const root = path.join(__dirname, '..');

function run(command, opt = {}) {
  log('\n> exec command:', command);
  log('');
  execSync(command, {
    cwd: root,
    stdio: 'inherit',
    ...opt,
  });
}

module.exports = {
  run,
};
