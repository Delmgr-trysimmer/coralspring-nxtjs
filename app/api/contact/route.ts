import {
  validateEmail,
  validateFirstName,
  validateLastName,
  validateMessage,
  validatePhone,
} from "@/lib/contact-validation";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return false;
  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}

export async function POST(request: Request) {
  try {
    const json = (await request.json()) as Record<string, unknown>;

    const consent = json.consent;
    const recaptchaToken = json.recaptchaToken;

    if (consent !== true) {
      return NextResponse.json({ error: "Consent is required." }, { status: 400 });
    }

    const tokenStr =
      typeof recaptchaToken === "string" ? recaptchaToken.trim() : "";
    if (!tokenStr || !(await verifyRecaptcha(tokenStr))) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 },
      );
    }

    const vFirst = validateFirstName(json.firstName);
    if (!vFirst.ok) {
      return NextResponse.json({ error: vFirst.error }, { status: 400 });
    }
    const vLast = validateLastName(json.lastName);
    if (!vLast.ok) {
      return NextResponse.json({ error: vLast.error }, { status: 400 });
    }
    const vEmail = validateEmail(json.email);
    if (!vEmail.ok) {
      return NextResponse.json({ error: vEmail.error }, { status: 400 });
    }
    const vPhone = validatePhone(json.phone);
    if (!vPhone.ok) {
      return NextResponse.json({ error: vPhone.error }, { status: 400 });
    }
    const vMessage = validateMessage(json.message);
    if (!vMessage.ok) {
      return NextResponse.json({ error: vMessage.error }, { status: 400 });
    }

    const fn = vFirst.value;
    const ln = vLast.value;
    const em = vEmail.value;
    const ph = vPhone.value;
    const msg = vMessage.value;

    const to =
      process.env.CONTACT_FORM_TO ||
      process.env.APPOINTMENT_CC_EMAIL ||
      process.env.SMTP_FROM;
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user;

    if (!to || !host || !user || !pass || !from) {
      console.error("contact API: missing CONTACT_FORM_TO / SMTP env");
      return NextResponse.json(
        { error: "Mail is not configured on the server." },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `Website contact: ${fn} ${ln}`;
    const text = [
      `Name: ${fn} ${ln}`,
      `Email: ${em}`,
      `Phone: ${ph}`,
      `Agreed to calls, emails, and SMS: yes`,
      "",
      "Message:",
      msg,
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      replyTo: em,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact API:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again later." },
      { status: 500 },
    );
  }
}
