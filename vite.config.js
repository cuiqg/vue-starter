import path from 'node:path'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import VueRouter from 'unplugin-vue-router/vite'

import UnoCSS from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import IconResolver from 'unplugin-icons/resolver'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { unheadVueComposablesImports } from '@unhead/vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
  },
  plugins: [
    // https://github.com/vue-macros/vue-macros
    VueMacros({
      plugins: {
        vue: Vue(),
      },
    }),

    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      dts: false,
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        unheadVueComposablesImports,
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink'],
        },
      ],
      resolvers: [
      ],
      vueTemplate: true,
      dts: false,
      dirs: [
        'src/stores',
      ],
      eslintrc: {
        enabled: false,
      },
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      resolvers: [
        IconResolver({
          prefix: false,
          enabledCollections: [],
        }),
      ],
      dts: false,
    }),

    // https://github.com/unplugin/unplugin-icons
    Icons({
      compiler: 'vue3',
    }),

    // https://github.com/antfu/unocss
    UnoCSS(),
  ],
})
