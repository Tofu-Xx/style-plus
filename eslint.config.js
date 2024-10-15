// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  markdown: true,
  rules: {
    'format/prettier': 'off',
  },
})
