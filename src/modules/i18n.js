import { createI18n } from 'vue-i18n'
import zhCN from '@/locales/zh-CN'
import en from '@/locales/en'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en',
  messages: {
    en,
    'zh-CN': zhCN
  }
})

export const install = (app, { router }) => {
  app.use(i18n)
}
