import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
      website?: string;
    };

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const website = body.website?.trim() ?? "";

    // Quietly accept bot submissions caught by the honeypot.
    if (website) return NextResponse.json({ ok: true });

    if (name.length < 2 || name.length > 80) {
      return NextResponse.json({ message: "Please enter a valid name." }, { status: 400 });
    }

    if (!emailPattern.test(email) || email.length > 160) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    if (message.length < 10 || message.length > 3000) {
      return NextResponse.json({ message: "Please enter a message between 10 and 3,000 characters." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      console.error("Contact form is missing Resend environment variables.");
      return NextResponse.json(
        { message: "The contact form is temporarily unavailable. Please use LinkedIn or email below." },
        { status: 503 },
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
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
        text: [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
      }),
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text();
      console.error("Resend contact failure:", detail);
      return NextResponse.json({ message: "I couldn’t send that message. Please try again in a moment." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route failure:", error);
    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
