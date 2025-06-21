import { createHead } from '@unhead/vue/client'

export const install = (app, { router }) => {
  const head = createHead()
  app.use(head)
}
