import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend lazily or handle missing API key to avoid build errors
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey && process.env.NODE_ENV === 'production') {
    console.warn('RESEND_API_KEY is missing in production environment');
  }
  return new Resend(apiKey || 're_placeholder');
};

const REPLYBASE_LOGO_URL = 'https://replybase.co.uk/image/logo.png';

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
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const resend = getResend();

    // 1. Send internal notification email
    await resend.emails.send({
      from: 'ReplyBase Contact <system@replybase.co.uk>',
      to: 'admin@replybase.co.uk',
      subject: `New Contact Form Submission: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <h2 style="color: #4f46e5; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 20px;">
            <p style="margin-top: 0; font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message:</p>
            <p style="margin-bottom: 0; white-space: pre-wrap; line-height: 1.5;">${escapeHtml(message)}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">
            Sent from ReplyBase Marketing Site
          </p>
        </div>
      `,
    });

    // 2. Send auto-reply to the user
    await resend.emails.send({
      from: 'ReplyBase <admin@replybase.co.uk>',
      to: email,
      subject: 'We received your message — ReplyBase',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #111827; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="padding: 40px;">
            <img src="${REPLYBASE_LOGO_URL}" alt="ReplyBase Logo" width="160" style="display:block; max-width:160px; height:auto; margin:0 0 20px;" />
            <h1 style="margin:0; font-size:28px; line-height:1.25; font-weight:700;">Thanks for contacting ReplyBase, ${escapeHtml(name)}.</h1>
            <p style="margin: 24px 0; font-size: 16px; line-height: 1.6; color: #374151;">
              We've received your message and our team is already looking into it. We reply to all enquiries within one business day (usually much faster).
            </p>
            <div style="margin: 32px 0; padding: 24px; background-color: #f9fafb; border-radius: 8px;">
              <h2 style="margin:0 0 12px 0; font-size:14px; font-weight:600; text-transform:uppercase; color: #6b7280; letter-spacing: 0.05em;">Your Enquiry</h2>
              <p style="margin:0; font-size:15px; color: #4b5563; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
            <p style="margin: 24px 0; font-size: 16px; line-height: 1.6; color: #374151;">
              While you wait, feel free to explore our <a href="https://replybase.co.uk/docs" style="color: #4f46e5; text-decoration: none; font-weight: 500;">documentation</a> or sign up for a <a href="https://app.replybase.co.uk/auth/register" style="color: #4f46e5; text-decoration: none; font-weight: 500;">free trial</a>.
            </p>
            <hr style="border:0; border-top: 1px solid #e5e7eb; margin: 32px 0;" />
            <p style="margin:0; font-size:14px; color: #6b7280;">
              Best regards,<br />
              <strong>The ReplyBase Team</strong>
            </p>
          </div>
          <div style="background-color: #f9fafb; padding: 24px; text-align: center;">
            <p style="margin:0; font-size:12px; color: #9ca3af;">
              &copy; ${new Date().getFullYear()} ReplyBase. All rights reserved.<br />
              AI-powered conversation automation for modern businesses.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
