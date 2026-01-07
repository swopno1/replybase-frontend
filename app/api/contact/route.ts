import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Contact Form <noreply@replybase.co.uk>",
      to: email as string,
      cc: "replybase1@gmail.com",
      replyTo: email,
      subject: `Thank you for reaching out, ${name}!`,
      html: `
    <p>Dear ${name},</p>
    <p>Thank you for reaching out to us. We truly appreciate you taking the time to contact us, and we want you to know that your message is important to us. Our team is reviewing your inquiry, and we will get back to you as soon as possible.</p>
    <p>In the meantime, here’s a summary of the information you provided:</p>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Company:</strong> ${company || "N/A"}</li>
      <li><strong>Message:</strong> ${message}</li>
    </ul>
    <p>If you have any additional details or questions, feel free to reply to this email. Please note that while this email address is primarily for outgoing messages, we’ve added our team’s email as CC to ensure we can continue the conversation seamlessly.</p>
    <p>Thank you again for contacting us. We look forward to assisting you!</p>
    <p>Best regards,</p>
    <p>The ReplyBase Team</p>
  `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
