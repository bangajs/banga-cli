const nodemailer = require("nodemailer");
const CustomError = require("./../utils/custom-error");
const { mailer, APP_NAME } = require("./../config");

class MailService {
  constructor(user) {
    this.user = user;
  }

  async send(subject, content, recipient, from) {
    from = from || `${APP_NAME} <no-reply${mailer.DOMAIN}>`
    content = content || " "

    if (!recipient || recipient.length < 1) throw new CustomError("Recipient is required");
    if (!subject) throw new CustomError("Subject is required");

    // Define nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: mailer.HOST,
      port: mailer.PORT,
      secure: mailer.SECURE,
      auth: {
        user: mailer.USER,
        pass: mailer.PASSWORD
      }
    });

    const result = await transporter.sendMail({
      from,
      to: Array.isArray(recipient) ? recipient.join() : recipient,
      subject,
      text: content
    });

    if (!result) throw new CustomError("Unable to send mail")

    return result
  }

  async sendEmailVerificationMail(link) {
    const subject = "Email Verification";
    const content = `Hey ${this.user.name}, Please click on the link to verify your email ${link}`
    const recipient = this.user.email

    return await this.send(subject, content, recipient)
  }

  async sendPasswordResetMail(link) {
    const subject = "Reset password";
    const content = `Hey ${this.user.name}, Please click on the link to reset your password ${link}`
    const recipient = this.user.email

    return await this.send(subject, content, recipient)
  }
}

module.exports = MailService