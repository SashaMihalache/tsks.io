module.exports = {
  ...require('config/eslint-server'),
  parserOptions: {
    project: ['./tsconfig.lint.json'],
    tsconfigRootDir: __dirname,
  },
}
