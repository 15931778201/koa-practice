import send from '../config/MailConfig'
import moment from 'moment'

class LoginController {
  constructor(){}
  // 忘记密码，发送邮件
  async forget (ctx) {
    const { body } = ctx.request
    try {
      // body.username -> database -> email
      const result = await send({
        type: 'reset',
        data: {
          key: '1234',
          username: body.username
        },
        expire: moment()
          .add(30, 'minutes')
          .format('YYYY-MM-DD HH:mm:ss'),
        email: body.username,
        user: 'Wusx'
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功'
      }
    } catch (e) {
      console.log(e)
    }
  }
}
export default  new LoginController()