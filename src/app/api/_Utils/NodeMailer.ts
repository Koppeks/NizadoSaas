
import nodemailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"

const nodemailerEmail = process.env.NODEMAILER_EMAIL as string
const nodemailerPassword = process.env.NODEMAILER_PASSWORD as string

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth:{
    user: nodemailerEmail,
    pass: nodemailerPassword,
  }
} as SMTPTransport.Options)
