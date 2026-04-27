import nodemailer from "nodemailer";

export function createMailTransporter(credentials?: { user?: string; pass?: string }) {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: credentials?.user ?? process.env.GMAIL_USER,
      pass: credentials?.pass ?? process.env.GMAIL_APP_PASSWORD,
    },
  });
}
