import path from 'node:path'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import { unheadVueComposablesImports } from '@unhead/vue'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import Layouts from 'vite-plugin-vue-layouts-next'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  css: {
  },
  plugins: [
    // https://github.com/vue-macros/vue-macros
    VueMacros({
      plugins: {
        vue: Vue()
      }
    }),

    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      dts: false
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        unheadVueComposablesImports,
        VueRouterAutoImports
      ],
      resolvers: [
      ],
      dts: false,
      dirs: [
        'src/stores'
      ],
      eslintrc: {
        enabled: true,
        globalsPropValue: 'readonly'
      },
      vueTemplate: true
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      resolvers: [
        IconResolver({
          prefix: false
        })
      ],
      dts: false
    }),

    // https://github.com/unplugin/unplugin-icons
    Icons({
      compiler: 'vue3',
      autoInstall: true
    }),

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, './src/locales/**')]
    }),

    // https://github.com/antfu/unocss
    UnoCSS()
  ]
})
