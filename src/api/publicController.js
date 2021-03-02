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
    const newCaptcha = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1i',
      noise: 3, // number of noise lines
      color: true, // characters will have distinct colors instead of grey, true if background option is set
      background: '#cc9966' // background color of the svg image
    })
    ctx.body={
      code: 200,
      msg: newCaptcha.data
    }
  }
}
export default  new PublicController()
