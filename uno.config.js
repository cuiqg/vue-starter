import {
  defineConfig,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
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
  ]
})
