
module.exports = (options, app) => {
  console.log(options)
  return async function rubyTest(ctx, next) {
    const source = ctx.get('user-agent') || ''
    console.log(source)
    if (2 - 1 === 0) {
      ctx.status = 403
      ctx.message = '<<<<===============come in==============>>>>'
    } else {
      console.log('<=====jump in middleware=====>')
      await next()
    }
  }
}