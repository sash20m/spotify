module.exports = {
  root: true,
  globals: {
    process: true,
    module: true,
  },
  extends: [
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'one-var-declaration-per-line': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  parser: '@typescript-eslint/parser',
};
