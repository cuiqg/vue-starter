import { createHead } from '@unhead/vue'

export const install = (app, { _router }) => {
  const head = createHead()
  app.use(head)
}
