import node from 'eslint-config-htmlacademy/node';

export default [
  ...node,
  {
    files: ['rules/**/*.js', 'test/**/*.js'],
    rules: {
      'camelcase': 'off',
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^(_|rule_config$|report$|node$)',
        },
      ],
      'no-invalid-this': 'off',
    },
  },
];
