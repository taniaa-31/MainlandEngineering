import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, email, company, phone, projectType, projectDetails } = await req.json();

    // Configure the transporter (use your own Gmail or testing email)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // app password (not your real password)
      },
      // host: process.env.EMAIL_HOST,
      // port: process.env.EMAIL_PORT,
      // secure: process.env.EMAIL_SECURE === "true",
      // auth: {
      //   user: process.env.EMAIL_USER, // structure@mainlandeng.com
      //   pass: process.env.EMAIL_PASS, // Outlook app password
      // },
    });

    // Create the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // send to yourself first to test
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Company: ${company}
        Phone: ${phone}
        Project Type: ${projectType}
        Project Details: ${projectDetails}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Error sending email" }, { status: 500 });
  }
}
