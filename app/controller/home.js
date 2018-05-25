
const Controller = require('egg').Controller
const path = require('path')
const fs = require('fs')

let index
let file = path.resolve(__dirname, '../public/views/index.html')
fs.readFile(file, (err, data) => {
  index = data
})


class HomeController extends Controller {
  async index () {
    this.ctx.set('Content-Type', 'text/html')
    this.ctx.body = index
  }
}

module.exports = HomeController