import { NextResponse } from "next/server";
import { Resend } from "resend";

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey && process.env.NODE_ENV === "production") {
    console.warn("RESEND_API_KEY is missing in production environment");
  }
  return new Resend(apiKey || "re_placeholder");
};

const REPLYBASE_LOGO_URL = "https://replybase.co.uk/image/logo.png";

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      businessName,
      businessWebsite,
      industry,
      email,
      phone,
      contactMethod,
      motivation,
    } = body;

    if (!firstName || !lastName || !businessName || !industry || !email || !contactMethod || !motivation) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resend = getResend();

    await resend.emails.send({
      from: "ReplyBase Founding 10 <system@replybase.co.uk>",
      to: "admin@replybase.co.uk",
      subject: `Founding 10 Application: ${escapeHtml(firstName)} ${escapeHtml(lastName)} — ${escapeHtml(businessName)}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 620px; margin: 0 auto; color: #1e293b;">
          <h2 style="color: #4f46e5; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">New Founding 10 Application</h2>
          <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
          <p><strong>Business:</strong> ${escapeHtml(businessName)}</p>
          <p><strong>Website:</strong> ${escapeHtml(businessWebsite || "Not provided")}</p>
          <p><strong>Industry:</strong> ${escapeHtml(industry)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>How customers contact them:</strong> ${escapeHtml(contactMethod)}</p>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 20px;">
            <p style="margin-top: 0; font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">What made them apply:</p>
            <p style="margin-bottom: 0; white-space: pre-wrap; line-height: 1.5;">${escapeHtml(motivation)}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">Submitted via replybase.co.uk/founding10</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: "Shaun at ReplyBase <admin@replybase.co.uk>",
      to: email,
      subject: "Your Founding 10 Application — ReplyBase",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #111827; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="padding: 40px;">
            <img src="${REPLYBASE_LOGO_URL}" alt="ReplyBase" width="140" style="display:block; max-width:140px; height:auto; margin:0 0 24px;" />
            <h1 style="margin:0; font-size:26px; line-height:1.3; font-weight:700;">Thank you for applying, ${escapeHtml(firstName)}.</h1>
            <p style="margin: 20px 0; font-size: 16px; line-height: 1.7; color: #374151;">
              Your application has been received successfully. I personally review every application and will be in touch as soon as possible.
            </p>
            <p style="margin: 20px 0; font-size: 16px; line-height: 1.7; color: #374151;">
              As a reminder, here's what you'll receive as a Founding 10 business:
            </p>
            <ul style="padding-left: 20px; color: #374151; font-size: 15px; line-height: 2;">
              <li>6 months completely free</li>
              <li>Personal one-to-one onboarding</li>
              <li>Priority support</li>
              <li>Direct access to the founder</li>
              <li>Help shape the future of ReplyBase</li>
              <li>Exclusive Founding Partner pricing after the programme</li>
            </ul>
            <hr style="border:0; border-top: 1px solid #e5e7eb; margin: 32px 0;" />
            <p style="margin:0; font-size:15px; color: #374151;">
              — Shaun<br />
              <span style="color: #6b7280;">Founder, ReplyBase</span>
            </p>
          </div>
          <div style="background-color: #f9fafb; padding: 20px; text-align: center;">
            <p style="margin:0; font-size:12px; color: #9ca3af;">
              &copy; ${new Date().getFullYear()} ReplyBase. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Founding 10 form error:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again later." },
      { status: 500 }
    );
  }
}
