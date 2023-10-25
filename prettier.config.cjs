/**
 * Options for Prettier.
 *
 * @see https://prettier.io/docs/en/options.html
 */

module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^next|^react",
    "^(?!(react|@core/))\\w+",
    "^@/@types",
    "^@views",
    "^@/hooks|^@/configs",
    "^@styles|^@utils",
    "^([@|(\\w)])",
    "^.",
  ],
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
