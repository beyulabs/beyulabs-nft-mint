module.exports = {
  extends: ['airbnb-typescript'],
  plugins: ['react', 'import'],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    __DEV__: true,
    __PROD__: true,
  },
  rules: {
  },
};
