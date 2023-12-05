import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetTypography,
} from 'unocss'
import extractorPug from '@unocss/extractor-pug'
import transformerDirectives from '@unocss/transformer-directives'

const PROD =
  process.env.NODE_ENV === 'production' &&
  process.env.BUILD_ENV !== 'development'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'uno:',
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives({})],
  extractors: [extractorPug()],
  rules: [
    ['dev-only', PROD ? {} : { display: 'none' }],
    ['rarity-1', { color: '#f3f3f3' }],
    ['rarity-2', { color: '#c0ffc0' }],
    ['rarity-3', { color: '#5990ff' }],
    ['rarity-4', { color: '#b38cff' }],
    ['rarity-7', { color: '#d789b6' }],
  ],
})
