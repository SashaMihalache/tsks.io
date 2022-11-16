module.exports = {
  ...require('config/eslint-next.js'),
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
