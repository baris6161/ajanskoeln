import { NextResponse } from "next/server";
import { listSettings, resetSmtpSettings, saveSmtpSettings, upsertSettings } from "@/lib/queries/settings";

export async function GET() {
  try {
    const settings = await listSettings();
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.resetSmtp === true) {
      await resetSmtpSettings();
      return NextResponse.json({ ok: true });
    }
    if (body.smtpEmail !== undefined && body.smtpPassword !== undefined) {
      await saveSmtpSettings(body.smtpEmail, body.smtpPassword);
      return NextResponse.json({ ok: true });
    }

    await upsertSettings(body.items ?? []);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
