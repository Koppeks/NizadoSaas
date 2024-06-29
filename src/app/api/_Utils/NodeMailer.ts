import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const nodemailerEmail = process.env.NODEMAILER_EMAIL as string;
const nodemailerPassword = process.env.NODEMAILER_PASSWORD as string;

const developer = process.env.NEXT_PUBLIC_DEVELOPER_BASE_URL as string
const production = process.env.NEXT_PUBLIC_DOMAIN as string

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: nodemailerEmail,
    pass: nodemailerPassword,
  },
} as SMTPTransport.Options);

async function sendEmail(email: string, subject: string, html: string) {
  try {
    const message = {
      from: nodemailerEmail,
      to: email,
      subject,
      text: "Hello SMTP Email",
      html,
    };
    await transporter.sendMail(message);
  } catch (error) {
    console.log(error);
  }
}

interface TemplateData {
  username: string;
}

function getTemplate(data: TemplateData, token: string, type: string) {
  let endpoint = developer !== "" ? developer : production

  switch (type) {
    case "validateEmail":
      return `
      <html>
        <div style="display: flex; margin: auto; justify-content: center; align-items: center; flex-direction: column;">
          <center style="background-color: white; box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;; width: 500px; border-radius: 4px; overflow: hidden;">
            <header style="background-color: rgb(190, 73, 73); padding: 1rem;">
              <h1 style="color: white;">Verify your email</h1>
              <h4 style="color: white;">We do this to check if it's you ${data.username}!</h4>
            </header>
            <div style="padding: 1rem 2rem;">
              <p>If you didn't ask to verify this account, please ignore this email or contact us at <a href="mailto:fakeemail@contact.com">fakeemail@contact.com</a></p>
              <a href="${endpoint}/verify/${token}" target="_blank" style="box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; border: none; background-color: rgb(190, 73, 73); color: white; padding: 0.5rem 1rem; margin: 1rem; border-radius: 4px; cursor: pointer;">Verify your account</a>
            </div>
            <footer style="height: 60px;">
              <div>Copyright &#169; 2024. All rights reserved.</div>
              <div>If you don't want to receive these emails from us in the future, please <a href="https://app.omegaconstructionmanagement.com/profile" target="_blank"><span>unsubscribe</span></a></div>
            </footer>
          </center>
        </div>
      </html>
    `;
    default:
      "";
      break;
  }
}

export { sendEmail, getTemplate };
