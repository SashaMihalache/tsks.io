module.exports = {
  ...require('config/eslint-server.js'),
  parserOptions: {
    project: './tsconfig.lint.json',
    tsconfigRootDir: __dirname,
  },
}
