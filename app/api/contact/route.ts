import { NextResponse } from "next/server";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

const REPLYBASE_SITE_URL = "https://replybase.co.uk";
const REPLYBASE_LOGO_URL = `${REPLYBASE_SITE_URL}/image/logo.png`;
const REPLYBASE_FROM = "ReplyBase <admin@replybase.co.uk>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMessageHtml(value: string) {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

function buildContactEmailHtml({
  name,
  email,
  company,
  message,
}: {
  name: string;
  email: string;
  company: string;
  message: string;
}) {
  return `
    <div style="margin:0; padding:32px 16px; background:linear-gradient(180deg, #f4efe7 0%, #ffffff 100%); font-family:Arial, Helvetica, sans-serif; color:#1f2937;">
      <div style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #eadfce; border-radius:24px; overflow:hidden; box-shadow:0 18px 45px rgba(15, 23, 42, 0.08);">
        <div style="padding:28px 32px; background:linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%); color:#ffffff;">
          <img src="${REPLYBASE_LOGO_URL}" alt="ReplyBase" width="160" style="display:block; max-width:160px; height:auto; margin:0 0 20px;" />
          <div style="font-size:12px; letter-spacing:0.12em; text-transform:uppercase; opacity:0.76; margin-bottom:10px;">Message Received</div>
          <h1 style="margin:0; font-size:28px; line-height:1.25; font-weight:700;">Thanks for contacting ReplyBase, ${escapeHtml(name)}.</h1>
          <p style="margin:14px 0 0; font-size:15px; line-height:1.7; color:rgba(255,255,255,0.88);">We have received your message and our team is reviewing it now. We will follow up from admin@replybase.co.uk as soon as possible.</p>
        </div>

        <div style="padding:32px;">
          <p style="margin:0 0 18px; font-size:15px; line-height:1.75;">Hello ${escapeHtml(name)},</p>
          <p style="margin:0 0 18px; font-size:15px; line-height:1.75;">Thank you for reaching out to ReplyBase. We appreciate the time you took to share your inquiry. This email confirms that your message has been received successfully.</p>
          <p style="margin:0 0 24px; font-size:15px; line-height:1.75;">Below is a copy of the information you submitted for your reference.</p>

          <div style="border:1px solid #e5e7eb; border-radius:20px; background:#f8fafc; padding:22px 24px;">
            <div style="margin:0 0 14px; font-size:13px; letter-spacing:0.08em; text-transform:uppercase; color:#64748b;">Contact Summary</div>
            <table role="presentation" width="100%" style="border-collapse:collapse; font-size:14px; line-height:1.65;">
              <tr>
                <td style="padding:0 0 10px; width:120px; color:#64748b; vertical-align:top;">Name</td>
                <td style="padding:0 0 10px; color:#0f172a; font-weight:600; vertical-align:top;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding:0 0 10px; width:120px; color:#64748b; vertical-align:top;">Email</td>
                <td style="padding:0 0 10px; color:#0f172a; font-weight:600; vertical-align:top;">${escapeHtml(email)}</td>
              </tr>
              <tr>
                <td style="padding:0 0 10px; width:120px; color:#64748b; vertical-align:top;">Company</td>
                <td style="padding:0 0 10px; color:#0f172a; font-weight:600; vertical-align:top;">${escapeHtml(company)}</td>
              </tr>
              <tr>
                <td style="padding:0; width:120px; color:#64748b; vertical-align:top;">Message</td>
                <td style="padding:0; color:#0f172a; font-weight:600; vertical-align:top;">${formatMessageHtml(message)}</td>
              </tr>
            </table>
          </div>

          <p style="margin:24px 0 0; font-size:15px; line-height:1.75;">If you want to add anything else, simply reply to this email and our team will pick it up directly.</p>
        </div>

        <div style="padding:24px 32px 32px; border-top:1px solid #e5e7eb; background:#fcfcfd;">
          <p style="margin:0 0 6px; font-size:15px; font-weight:700; color:#0f172a;">The ReplyBase Team</p>
          <p style="margin:0 0 6px; font-size:14px; color:#475569;">AI-powered conversations for teams that do not want to miss a lead.</p>
          <p style="margin:0; font-size:14px; color:#475569;">
            <a href="mailto:admin@replybase.co.uk" style="color:#1d4ed8; text-decoration:none;">admin@replybase.co.uk</a>
            &nbsp;|&nbsp;
            <a href="${REPLYBASE_SITE_URL}" style="color:#1d4ed8; text-decoration:none;">replybase.co.uk</a>
          </p>
        </div>
      </div>
    </div>
  `;
}

function buildContactEmailText({
  name,
  email,
  company,
  message,
}: {
  name: string;
  email: string;
  company: string;
  message: string;
}) {
  return [
    `Hello ${name},`,
    "",
    "Thank you for contacting ReplyBase.",
    "",
    "We have received your message and our team is reviewing it now. We will follow up from admin@replybase.co.uk as soon as possible.",
    "",
    "Here is a copy of the information you submitted:",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Message: ${message}`,
    "",
    "If you want to add anything else, simply reply to this email.",
    "",
    "The ReplyBase Team",
    "admin@replybase.co.uk",
    REPLYBASE_SITE_URL,
  ].join("\n");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return new Response("Email disabled", { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, company, message } = await request.json();
    const normalizedCompany = company?.trim() || "Not provided";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: REPLYBASE_FROM,
      to: email as string,
      bcc: REPLYBASE_FROM,
      subject: `We received your message, ${name}`,
      html: buildContactEmailHtml({
        name,
        email,
        company: normalizedCompany,
        message,
      }),
      text: buildContactEmailText({
        name,
        email,
        company: normalizedCompany,
        message,
      }),
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 },
    );
  }
}
