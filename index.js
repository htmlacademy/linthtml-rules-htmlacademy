import {readdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const rulesDir = path.join(here, 'rules');
const entries = await readdir(rulesDir);
const ruleDirs = entries.filter((name) => !name.startsWith('.'));

const rules = await Promise.all(
  ruleDirs.map(async (dir) => {
    const mod = await import(path.join(rulesDir, dir, 'index.js'));
    return mod.default;
  }),
);

export default {rules};
