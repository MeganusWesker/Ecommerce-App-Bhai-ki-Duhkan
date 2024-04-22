import { createTransport } from "nodemailer";

export const sendEmail = async (email, subject, text) => {
  console.log(
    process.env.SMTP_HOST,
    process.env.SMTP_PORT,
    process.env.SMTP_SERVICE,
    process.env.SMTP_USER,
    process.env.SMTP_PASS
  );
  const transport = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transport.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject,
    text,
  });
};
