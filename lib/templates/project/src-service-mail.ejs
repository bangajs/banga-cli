const nodemailer = require("nodemailer");
const config = require("./../config");
const { CustomError } = require("./../utils");


class MailService {
  constructor(data) {
    this.data = data;
  }

  async send({ subject, content, recipient, from }) {
    from = from || `${config.APP_NAME} <noreply@${config.nodemailer.DOMAIN}>`
    content = content || " "

    if (!recipient || recipient.length < 1) throw new CustomError("Recipient is required");
    if (!subject) throw new CustomError("Subject is required");

    // Define nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: config.nodemailer.HOST,
      port: config.nodemailer.PORT,
      secure: config.nodemailer.SECURE,
      auth: {
        user: config.nodemailer.USER,
        pass: config.nodemailer.PASSWORD
      }
    });

    const result = await transporter.sendMail({
      from,
      to: Array.isArray(recipient) ? recipient.join() : recipient,
      subject,
      text: content
    });

    if (!result) throw new CustomError("Error occured while trying to send mail")

    return result
  }

  async sendEmailVerificationMail({ otp }) {
    const subject = "Email Verification";
    const content = `Use the OTP code ${otp} to complete your email verification.`
    const recipient = this.data.email

    return await this.send({ subject, content, recipient })
  }

  async sendPasswordResetMail({ otp }) {
    const subject = "Reset password";
    const content = `Use the OTP code ${otp} to reset your password.`
    const recipient = this.data.email

    return await this.send({ subject, content, recipient })
  }

  async sendAdminInviteMail({ link }) {
    const subject = "Admin invite";
    const content = `You have been invited to join ${config.APP_NAME} as an admin, Please click on the link to join ${link}`
    const recipient = this.data.email

    return await this.send({ subject, content, recipient })
  }
}


module.exports = MailService