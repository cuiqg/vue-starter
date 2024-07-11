import { createPinia } from 'pinia'

export const install = (app, { _router }) => {
  const pinia = createPinia()

  app.use(pinia)
}
