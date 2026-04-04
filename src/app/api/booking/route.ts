import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const TO = process.env.BOOKING_NOTIFY_EMAIL ?? "grayson@graybaysolutions.io";
const FROM =
  process.env.RESEND_FROM ?? "Nice'n Tight <no-reply@syndivv.com>";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server missing RESEND_API_KEY" },
      { status: 500 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, date, boat, tripType, duration, message } = body;
  if (!name?.trim() || !email?.trim() || !date?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and date are required" },
      { status: 400 }
    );
  }

  const text = [
    "New booking request (nicentightcr.com)",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Preferred date: ${date}`,
    `Boat: ${boat || "—"}`,
    `Trip: ${tripType || "—"}`,
    `Duration: ${duration || "—"}`,
    "",
    message?.trim() || "(no message)",
  ].join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `Booking: ${name} — ${date}`,
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
