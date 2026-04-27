import { NextResponse } from "next/server";
import { listSettings, resetSmtpSettings, saveSmtpSettings, upsertSettings } from "@/lib/queries/settings";
import { settingsItemsPayloadSchema, smtpPayloadSchema } from "@/lib/security/validation";

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
      const parsed = smtpPayloadSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json({ error: "Invalid SMTP payload" }, { status: 400 });
      }
      await saveSmtpSettings(parsed.data.smtpEmail, parsed.data.smtpPassword);
      return NextResponse.json({ ok: true });
    }

    const parsed = settingsItemsPayloadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid settings payload" }, { status: 400 });
    }
    await upsertSettings(parsed.data.items);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Settings API error", error);
    return NextResponse.json(
      { error: "Settings operation failed" },
      { status: 500 },
    );
  }
}
