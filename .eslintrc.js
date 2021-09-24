module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['airbnb', 'react-app'],
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'no-param-reassign': 0,
    'react/no-array-index-key': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'import/extensions': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    camelcase: 0,
    'no-nested-ternary': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'src',
        ],
        extensions: [
          '.ts',
          '.tsx',
        ],
      },
    },
  },
};
