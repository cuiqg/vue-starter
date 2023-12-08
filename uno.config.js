import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import extractorArbitrary from '@unocss/extractor-arbitrary-variants'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  theme: {
    fontFamily: {
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  extractors: [
    extractorArbitrary(),
  ],
  shortcuts: {
  },
})
