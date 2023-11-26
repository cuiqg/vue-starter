import { createHead } from '@unhead/vue'

export const install = (app, { router }) => {
  const head = createHead()
  app.use(head)
}
