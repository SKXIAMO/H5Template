import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // enable UnoCSS support
    // https://unocss.dev/integrations/vscode
    unocss: true,
    typescript: true,
    // vue: true,
    formatters: {
      css: true
    },

    ignores: ['scripts/**']
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/singleline-html-element-content-newline': 'off',
      'vue/top-level-function': 'off',
      'vue/array-bracket-newline': ['error', 'consistent'],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always'
          },
          svg: 'always',
          math: 'always'
        }
      ],
      'no-unused-vars': 'error', // 禁止未使用的变量
      'vue/return-in-computed-property': 'off',
      'vue/attributes-order': 'error',
      'vue/block-tag-newline': 'error',
      'vue/html-closing-bracket-newline': 'error',
      'vue/html-end-tags': 'error',
      'vue/multiline-html-element-content-newline': 'error',
      'vue/mustache-interpolation-spacing': 'error',
      'vue/v-on-event-hyphenation': 'error',
      'vue/v-on-style': 'error',
      'vue/v-slot-style': 'error',
      'vue/no-export-in-script-setup': 'error',
      'vue/no-v-for-template-key-on-child': 'error',
      'vue/no-async-in-computed-properties': 'error',
      'vue/no-duplicate-attributes': 'error',
      'vue/define-macros-order': 'off',
      'vue/component-definition-name-casing': 'off',
      'vue/first-attribute-linebreak': 'off',
      'ts/consistent-type-imports': 'off'
    }
  },
  {
    rules: {
      'antfu/top-level-function': 'off',
      'style/comma-dangle': 'off',
      // 没有数据时不加要加逗号
      'comma-dangle': ['error', 'never'],
      'style/quote-props': 'off',
      'no-console': 'off', // 允许 console
      'antfu/if-newline': 'off', // 允许 一行一个 if
      'style/arrow-parens': 'off',
      'style/indent': 'off',
      'arrow-spacing': [2, { before: true, after: true }],
      'style/operator-linebreak': 'off',
      'ts/consistent-type-definitions': 'off',
      'sort-imports': 'off',
      'array-callback-return': 'off',
      'style/brace-style': 'off',
      'vue/comma-dangle': 'off',
      'vue/operator-linebreak': 'off',
      'vue/html-indent': 'off',
      'style/indent-binary-ops': 'off',
      'antfu/consistent-list-newline': 'off',
      'format/prettier': 'off',
      'unocss/order': 'off',
      'unocss/order-attributify': 'off'
    }
  }
)
