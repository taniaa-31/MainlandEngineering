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

export const runtime = "node";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const fullName = formData.get("fullName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phoneNumber = formData.get("phoneNumber")?.toString() || "";
    const resumeBlob = formData.get("resume") as Blob | null;

    // Prepare attachment safely
    const attachments = [];
    if (resumeBlob) {
      const arrayBuffer = await resumeBlob.arrayBuffer();
      attachments.push({
        filename: (resumeBlob as any).name || "resume.pdf", // fallback name
        content: Buffer.from(arrayBuffer),
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail app password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Job Application from ${fullName}`,
      text: `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}`,
      attachments,
    });

    return NextResponse.json({ message: "Application sent successfully!" });
  } catch (err) {
    console.error("Error sending application email:", err);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}
