module.exports = {
  ...require('eslint-config-custom/eslint-next.js'),
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
