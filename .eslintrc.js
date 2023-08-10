module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
  ],
  plugins: [
    'prettier',
    'cypress'
  ],
  // add your custom rules here
  // https://eslint.org/docs/rules/
  rules: {
    // off
    'eqeqeq': 'off',
    'no-console': 'off',
    'no-lonely-if': 'off',
    'no-multiple-empty-lines': 'off',
    'prefer-const': 'off',
    'vue/attributes-order': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'cypress/no-unnecessary-waiting': 'off',
    // error
    'indent': ['error', 2],
    'no-multi-spaces': 'error',
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': ['error', 'always'],
    // 'brace-style': ['error', 'stroustrup'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'func-call-spacing': 'error',
    'function-call-argument-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'new-parens': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', { 'consistent': true }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'spaced-comment': ['error', 'always', { 'markers': ['/'] }],
    'switch-colon-spacing': 'error',
    'arrow-spacing': 'error',
    'no-var': 'error',
    'template-curly-spacing': 'error',
  }
}
