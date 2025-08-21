import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("Contact form submission received");
  
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "noctis.hive@gmail.com", // your Gmail
        pass: "zyzu icce duqf nwyb",   // your app password
      },
    });

    const emailText = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const info = await transporter.sendMail({
      from: '"Noctisgroup Contact" <noctis.hive@gmail.com>',
      to: "singhmanjot9922@gmail.com",
      subject: `Contact Form Submission from ${name}`,
      text: emailText,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
