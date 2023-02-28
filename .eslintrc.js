module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ],
    'react-hooks/exhaustive-deps': [
      'warn',
    ],
    'react/prop-types': [
      'off',
    ],
    'import/no-extraneous-dependencies': [
      'off',
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['event', 'context'],
      },
    ],
  },
};
