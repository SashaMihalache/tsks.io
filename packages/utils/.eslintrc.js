module.exports = {
  ...require('eslint-config-custom/eslint-server.js'),
  parserOptions: {
    project: './tsconfig.lint.json',
    tsconfigRootDir: __dirname,
  },
}
