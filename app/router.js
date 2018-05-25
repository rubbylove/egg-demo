
module.exports = (app, b, c, d) => {
  const { router, controller }  = app
  router.get('/', controller.home.index)
  router.get('/index', controller.index.index)
  router.get('/list', controller.list.list)
}