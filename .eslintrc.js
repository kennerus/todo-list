module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  ignorePatterns: ['/src/assets/webflow-js/inhub.js', 'node_modules'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': ['error', 2, {
      'ignoredNodes': ['TemplateLiteral'],
    }],
    'template-curly-spacing': 'off',
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': 'off',
    'no-trailing-spaces': 'off',
    curly: ['error', 'all'],
    'arrow-parens': ['error', 'as-needed'],
    camelcase: 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
