const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

const version = packageJson.version;
const pluginXmlPath = path.join(__dirname, '..', 'plugin.xml');

const content = fs.readFileSync(pluginXmlPath, 'utf8');
const updated = content.replace(/(id="[\w\.-]+" version=")([\w\.-]+)(")/g, `$1${version}$3`);
fs.writeFileSync(pluginXmlPath, updated, 'utf8');
