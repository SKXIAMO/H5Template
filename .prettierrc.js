// @ts-check

/** @type {import("prettier").Config} */
export default {
  printWidth: 74,
  tabWidth: 2,
  semi: false,
  arrowParens: 'avoid',
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'ignore',
  endOfLine: 'auto',
  insertPragma: false,
  proseWrap: 'preserve',
  'objectCurly-newline': [
    'error',
    {
      multiline: true
    }
  ],
  'array-bracket-newline': ['error', 'consistent'],
  vueIndentScriptAndStyle: true
}
