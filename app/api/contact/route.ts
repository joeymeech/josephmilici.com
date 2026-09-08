import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const message = clean(payload.message);
  const website = clean(payload.website);

  // Quietly accept bot submissions so the honeypot does not reveal itself.
  if (website) return NextResponse.json({ ok: true });

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ message: "Please enter your name." }, { status: 400 });
  }

  if (!emailPattern.test(email) || email.length > 160) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  if (message.length < 10 || message.length > 3000) {
    return NextResponse.json({ message: "Message must be between 10 and 3,000 characters." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { message: "Contact delivery is being configured. Please use LinkedIn for now." },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || "joey.meech@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "JosephMilici.com <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `${name} (${email})\n\n${message}`,
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111"><p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p></div>`,
    }),
  });

  if (!response.ok) {
    console.error("Resend contact delivery failed", response.status, await response.text());
    return NextResponse.json({ message: "Message could not be sent. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
