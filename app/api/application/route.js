// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";
// import { writeFile, unlink } from "fs/promises";
// import path from "path";

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const fullName = formData.get("fullName");
//     const email = formData.get("email");
//     const phoneNumber = formData.get("phoneNumber");
//     const resume = formData.get("resume");

//     // Save the uploaded file temporarily
//     let attachmentPath = null;
//     if (resume && resume.name) {
//       const bytes = await resume.arrayBuffer();
//       const buffer = Buffer.from(bytes);
//       attachmentPath = path.join(process.cwd(), "public", resume.name);
//       await writeFile(attachmentPath, buffer);
//     }

//     // Configure transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Mail options
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_TO,
//       subject: `New Job Application from ${fullName}`,
//       text: `
//         Full Name: ${fullName}
//         Email: ${email}
//         Phone: ${phoneNumber}
//       `,
//       attachments: attachmentPath
//         ? [{ filename: resume.name, path: attachmentPath }]
//         : [],
//     };

//     await transporter.sendMail(mailOptions);

//     // Delete the temporary file
//     if (attachmentPath) await unlink(attachmentPath);

//     return NextResponse.json({ message: "Application sent successfully!" }, { status: 200 });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json({ message: "Error sending email" }, { status: 500 });
//   }
// }




import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const fullName = formData.get("fullName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phoneNumber = formData.get("phoneNumber")?.toString() || "";
    const resume = formData.get("resume") as File | null;

    // Prepare attachment if exists
    let attachments = [];
    if (resume && resume.name) {
      const arrayBuffer = await resume.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: resume.name,
        content: buffer,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Job Application from ${fullName}`,
      text: `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}`,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Application sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending application email:", error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}
