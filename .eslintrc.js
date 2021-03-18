module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // should add ".ts" if typescript project,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': [2, { ignore: ['@'] }],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    camelcase: 'off',
    'linebreak-style': 0,
    'max-len': ['error', { code: 180 }],
    // 'react/prop-types': [2, { ignore: ['children'] }],
    'no-plusplus': 'off',
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
