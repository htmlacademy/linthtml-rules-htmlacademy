import {describe, it} from 'node:test';
import {strict as assert} from 'node:assert';
import linthtml from '@linthtml/linthtml';
import plugin from '../../index.js';

const pluginRulesMap = Object.fromEntries(
  plugin.rules.map((rule) => [rule.name, rule]),
);

async function runLinter(code, ruleName, options) {
  const issues = await linthtml(code, {
    plugins_rules: pluginRulesMap,
    rules: {[ruleName]: options},
  });
  return issues.map((i) => ({
    rule: i.rule,
    code: i.code,
    line: i.position?.start?.line,
    message: i.message,
  }));
}

function matches(found, exp, ruleName) {
  const fields = typeof exp === 'object' ? exp : {};
  const expectedRule = fields.rule || ruleName;
  return found.find((f) =>
    f.rule === expectedRule
    && (fields.code === undefined || f.code === fields.code)
    && (fields.line === undefined || f.line === fields.line)
    && (!fields.message || fields.message.test(f.message)),
  );
}

export function createTester(ruleName, defaultOptions = true) {
  const invalid = (description, code, expected = {}, options = defaultOptions) => {
    describe(`${ruleName}: ${description}`, () => {
      it('reports the issue', async () => {
        const found = await runLinter(code, ruleName, options);
        const match = matches(found, expected, ruleName);
        assert.ok(
          match,
          `Expected an issue for ${ruleName}${
            expected.code ? ` with code ${expected.code}` : ''
          }, got:\n${JSON.stringify(found, null, 2)}`,
        );
      });
    });
  };

  const valid = (description, code, options = defaultOptions) => {
    describe(`${ruleName}: ${description}`, () => {
      it('reports no issues for the rule', async () => {
        const found = await runLinter(code, ruleName, options);
        const ruleIssues = found.filter((f) => f.rule === ruleName);
        assert.equal(
          ruleIssues.length,
          0,
          `Expected no issues, got:\n${JSON.stringify(ruleIssues, null, 2)}`,
        );
      });
    });
  };

  return {invalid, valid};
}
