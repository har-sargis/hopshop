/**
 * Options for Prettier.
 *
 * @see https://prettier.io/docs/en/options.html
 */

module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["^next|^react", "^@views", "^@/types", "^@/hooks|^@/configs", "^."],
  importOrderSeparation: true,
  importOrderSortSpecifiers: false,
  importOrderCaseInsensitive: true,
  arrowParens: "always",
  bracketSpacing: true,
  jsxSingleQuote: true,
  printWidth: 120,
  proseWrap: "always",
  quoteProps: "as-needed",
  semi: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
};
