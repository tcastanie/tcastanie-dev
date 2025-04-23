// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(),
  // Your custom configs here
  // {
  //   rules: {
  //     'no-console': ['warn'],
  //     'vue/max-attributes-per-line': ['error', {
  //       singleline: { max: 3 },
  //     }],
  //     'vue/block-order': ['warn', {
  //       order: ['script', 'template', 'style'],
  //     }],
  //     '@stylistic/brace-style': ['error', '1tbs', {
  //       allowSingleLine: true,
  //     }],
  //   },
  // }
)
