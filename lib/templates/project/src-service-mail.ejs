const nodemailer = require("nodemailer");
const CustomError = require("./../utils/custom-error");
const { mailer, APP_NAME } = require("./../config");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: mailer.HOST,
      port: mailer.PORT,
      secure: mailer.SECURE,
      auth: {
        user: mailer.USER,
        pass: mailer.PASSWORD
      }
    });
  }

  async send(from, to, subject, content) {
    from = from || `${APP_NAME} <no-reply${mailer.DOMAIN}>`
    content = content || "Hello world"

    if (!to) throw new CustomError("Recipient is required");
    if (!subject) throw new CustomError("Subject is required");

    const sent = await this.transporter.sendMail({
      from,
      to: Array.isArray(to) ? to.join() : to,
      subject,
      text: content
    });

    return
  }
}

module.exports = MailService