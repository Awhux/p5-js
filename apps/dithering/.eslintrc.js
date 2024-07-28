/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@p5-js/eslint-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
}
