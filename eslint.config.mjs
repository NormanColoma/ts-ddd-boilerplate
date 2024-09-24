import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config({
  files: ['**/*.ts'],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
  ],
  plugins: {
    '@stylistic': stylistic
  },
  rules: {
    '@stylistic/indent': ['error', 2],
    '@stylistic/max-len': ['error', 120],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/semi-style': ['error', 'last'],
    '@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: true, avoidEscape: false }],
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    // known issue with jsx comma dangle
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/comma-style': ['error', 'last'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    // Prettier does not strictly enforce closing tag behavior rather ignores self closing tags
    '@stylistic/jsx-closing-bracket-location': ['error', {
      nonEmpty: 'tag-aligned',
      selfClosing: 'after-props',
    }],
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
    '@stylistic/no-trailing-spaces': ['error'],
    '@stylistic/space-before-function-paren': ['error', 'never'],
    '@stylistic/space-in-parens': ['error', 'never'],
    '@stylistic/space-infix-ops': ['error'],
    '@stylistic/space-unary-ops': ['error'],
    '@stylistic/no-multi-spaces': ['error'],
    '@stylistic/key-spacing': ['error'],
    '@stylistic/computed-property-spacing': ['error'],
    '@stylistic/keyword-spacing': ['error'],
    '@stylistic/space-before-blocks': ['error'],
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/func-call-spacing': ['error', 'never'],
    '@stylistic/no-extra-parens': ['error'],
    '@stylistic/no-whitespace-before-property': ['error'],
    '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    '@stylistic/operator-linebreak': ['error', 'after'],
    '@stylistic/padded-blocks': ['error', 'never'],
    '@stylistic/semi-spacing': ['error'],
    '@stylistic/spaced-comment': ['error'],
    '@stylistic/switch-colon-spacing': ['error'],
    '@stylistic/template-tag-spacing': ['error'],
    '@stylistic/arrow-spacing': ['error'],
    '@stylistic/no-tabs': ['error'],
    '@stylistic/comma-spacing': ['error'],
    '@stylistic/template-curly-spacing': ['error'],
    '@stylistic/no-floating-decimal': ['error'],
    '@stylistic/no-mixed-spaces-and-tabs': ['error'],
  }
});
