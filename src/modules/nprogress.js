import NProgress from 'nprogress'

export const install = (app, { router }) => {
  router.beforeEach((to, from) => {
    if (to.path !== from.path) {
      NProgress.start()
    }
  })

  router.afterEach(() => {
    NProgress.done()
  })
}
