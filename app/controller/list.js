
const Controller = require('egg').Controller

class newsController extends Controller {
  async list() {
    const ctx = this.ctx
    const page = ctx.query.page || 1
    const newList = await ctx.service.list.list(page)
    console.log('=======new list=======', newList)
    await ctx.render('index/index.nj', {list: newList})
  }
}

module.exports = newsController