import { NextResponse } from "next/server";
import { createMailTransporter } from "@/lib/mail/transporter";
import { smtpPayloadSchema } from "@/lib/security/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = smtpPayloadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid SMTP payload." },
        { status: 400 },
      );
    }
    const email = parsed.data.smtpEmail;
    const password = parsed.data.smtpPassword;

    const transporter = createMailTransporter({ user: email, pass: password });
    await transporter.verify();
    return NextResponse.json({ ok: true, message: "SMTP-Verbindung erfolgreich." });
  } catch (error) {
    console.error("SMTP test failed", error);
    return NextResponse.json(
      {
        ok: false,
        error: "SMTP-Test fehlgeschlagen",
      },
      { status: 500 },
    );
  }
}
