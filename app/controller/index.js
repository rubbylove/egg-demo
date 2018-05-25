
const Controller = require('egg').Controller

class IndexController extends Controller {
  async index () {
    const title = 'This is a title. where in test.'
    const _list = {
      value: [
        { id: 1, title: 'this is index 1', url: '/index/1' },
        { id: 2, title: 'this is index 2', url: '/index/2' }
      ]
    }
    await this.ctx.render('index/index.nj', {title, list: _list})
  }
}


module.exports = IndexController
