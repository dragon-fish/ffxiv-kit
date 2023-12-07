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
    ['rarity-1', { color: 'var(--xiv-rarity-1-color)' }],
    ['rarity-2', { color: 'var(--xiv-rarity-2-color)' }],
    ['rarity-3', { color: 'var(--xiv-rarity-3-color)' }],
    ['rarity-4', { color: 'var(--xiv-rarity-4-color)' }],
    ['rarity-7', { color: 'var(--xiv-rarity-7-color)' }],
    ['attr-header', { color: 'var(--xiv-attr-header-color)' }],
    ['attr-label', { color: 'var(--xiv-attr-label-color)' }],
    ['attr-value', { color: 'var(--xiv-attr-value-color)' }],
    ['attr-success', { color: 'var(--xiv-attr-success-color)' }],
    ['attr-warning', { color: 'var(--xiv-attr-warning-color)' }],
  ],
})
