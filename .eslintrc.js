module.exports = {
  extends: ['next', 'prettier'],
  plugins: ['@typescript-eslint', 'eslint-plugin-prettier'],
  globals: {
    __DEV__: true,
    __PROD__: true,
    localStorage: true,
  },
  rules: {
    'max-len': [2, { code: 140, ignorePattern: '^import .*' }],
    'no-console': 0,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'prettier/prettier': 'error',
    'prefer-promise-reject-errors': 0,
    //
    //
    'react-hooks/exhaustive-deps': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 0,
    //
    // for styles['abc']
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/naming-convention': 0,
  },
};
