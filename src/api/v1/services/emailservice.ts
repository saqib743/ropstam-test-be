const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "Gmail", // Replace with your email service provider (e.g., 'Gmail', 'Outlook')
  auth: {
    user: "saqibfurien@gmail.com", // Replace with your email address
    pass: "xpmgzybkbmjzcezp", // Replace with your email password or app-specific password
  },
});
interface emailServiceProps {
  email: string;
  password: string;
}
const emailService = async ({ email, password }: emailServiceProps) => {
  const mailOptions = {
    from: "saqibfurien@gmail.com", // Replace with your email address
    to: email,
    subject: "Welcome to Ropstam Test",
    text: `Weclome user your password is ${password}`,
  };

  await transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
export { emailService };
