import { NextResponse } from "next/server";
import { createMailTransporter } from "@/lib/mail/transporter";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.smtpEmail ?? "");
    const password = String(body.smtpPassword ?? "");

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, error: "E-posta ve app şifresi gerekli." },
        { status: 400 },
      );
    }

    const transporter = createMailTransporter({ user: email, pass: password });
    await transporter.verify();
    return NextResponse.json({ ok: true, message: "SMTP-Verbindung erfolgreich." });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error ? `SMTP-Test fehlgeschlagen: ${error.message}` : "SMTP-Test fehlgeschlagen",
      },
      { status: 500 },
    );
  }
}
