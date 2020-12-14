module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './'],
          ['~', './'],
        ],
        extensions: ['.vue', '.js'],
      },
    },
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
