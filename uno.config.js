import {
  defineConfig,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
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
