module.exports = {
  ...require('eslint-config-custom/eslint-server'),
  parserOptions: {
    project: ['./tsconfig.lint.json'],
    tsconfigRootDir: __dirname,
  },
}
