'use strict';

const fs = require('fs');
const path = require('path');

const rulesDir = path.join(__dirname, './rules');
const ruleFiles = fs.readdirSync(rulesDir);
const rules = ruleFiles.map((file) => require(path.join(rulesDir, file)));

module.exports = {
  rules
};
