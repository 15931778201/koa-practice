import svgCaptcha from 'svg-captcha'

class PublicController {
  constructor(){}
  // 获取评论列表
  async demo (ctx) {
    ctx.body={
      "message":"hello from wusx"
    }
  }
  async getCaptcha (ctx) {
    const newCaptcha = svgCaptcha.create({})
    ctx.body={
      code: 200,
      msg: newCaptcha.data
    }
  }
}
export default  new PublicController()
