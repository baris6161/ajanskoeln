import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { createMailTransporter } from "@/lib/mail/transporter";
import { loadSmtpSettings } from "@/lib/queries/settings";
import { getOfferById, updateOfferStatus } from "@/lib/queries/offers";
import { getCustomerById } from "@/lib/queries/customers";
import { OfferDocument } from "@/lib/pdf/offer-document";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const mailLanguage: "tr" | "en" | "de" =
      body.mailLanguage === "en" || body.mailLanguage === "de" ? body.mailLanguage : "tr";
    const smtp = await loadSmtpSettings();
    const transporter = createMailTransporter({
      user: smtp.email || process.env.GMAIL_USER,
      pass: smtp.password || process.env.GMAIL_APP_PASSWORD,
    });
    let attachments: Array<{ filename: string; content: Buffer; contentType: string }> = [];
    if (body.offerId) {
      const offer = await getOfferById(body.offerId);
      if (offer) {
        const customer = offer.customer_id ? await getCustomerById(offer.customer_id) : null;
        const pdfElement = React.createElement(OfferDocument, {
          offer,
          customer,
          localeOverride: mailLanguage,
        }) as unknown as Parameters<typeof renderToBuffer>[0];
        const pdfBuffer = await renderToBuffer(
          pdfElement,
        );
        attachments = [
          {
            filename: `${offer.offer_number}.pdf`,
            content: Buffer.from(pdfBuffer),
            contentType: "application/pdf",
          },
        ];
      }
    }

    await transporter.sendMail({
      from: smtp.email || process.env.GMAIL_USER,
      to: body.to,
      subject: body.subject,
      text: `${String(body.message ?? "").replace(/\s+$/, "")}\n\n\n`,
      attachments,
    });

    let warning: string | null = null;
    if (body.offerId) {
      try {
        await updateOfferStatus(body.offerId, "gesendet", mailLanguage);
      } catch (error) {
        warning =
          error instanceof Error
            ? `Mail sent, but offer status update failed: ${error.message}`
            : "Mail sent, but offer status update failed.";
      }
    }
    return NextResponse.json({ ok: true, warning });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
