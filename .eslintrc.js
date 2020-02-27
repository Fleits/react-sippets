module.exports = {
  parser: 'babel-eslint',
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  globals: { },
  rules: {
    'jsx-quotes': ['warn', 'prefer-single'],
    'quotes': ['warn', 'single'],
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'brace-style': ['warn', 'allman', { 'allowSingleLine': true }],
    'space-before-function-paren': ['warn', 'never'],
    "comma-spacing": ["warn", {"before": false, "after": true}],
    "comma-style": ["warn", "last"],
    'semi': ['warn', 'always'],
    'keyword-spacing': [
      'warn',
      {
        'before': true,
        'after': true,
        'overrides': {
          'if': { 'after': false },
          'while': { 'after': false },
          'for': { 'after': false },
          'switch': { 'after': false }
        }
      }
    ],
    'eol-last': ['warn', 'never'],
    'max-len': ['warn', { 'code': 120 }],
    'no-unused-vars': 'warn',
    'newline-per-chained-call': ['warn', { 'ignoreChainWithDepth': 4 }],
    'react/jsx-curly-newline': ['warn', { multiline: 'forbid', singleline: 'forbid' } ],
    'react/jsx-first-prop-new-line': ['warn',  'multiline-multiprop' ],
    'react/jsx-props-no-multi-spaces':['warn'],
    'react/display-name':['off']
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};