import {
  defineConfig,
  presetUno,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts()
  ],
  theme: {
    fontFamily: {
    }
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  shortcuts: {
  }
})
