import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { createMailTransporter } from "@/lib/mail/transporter";
import { loadSmtpSettings } from "@/lib/queries/settings";
import { getOfferById, updateOfferStatus } from "@/lib/queries/offers";
import { getCustomerById } from "@/lib/queries/customers";
import { OfferDocument } from "@/lib/pdf/offer-document";
import { sendOfferPayloadSchema } from "@/lib/security/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = sendOfferPayloadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid mail payload" }, { status: 400 });
    }
    const data = parsed.data;
    const mailLanguage: "tr" | "en" | "de" =
      data.mailLanguage === "en" || data.mailLanguage === "de" ? data.mailLanguage : "tr";
    const smtp = await loadSmtpSettings();
    if (!smtp.email || !smtp.password) {
      return NextResponse.json({ ok: false, error: "SMTP is not configured" }, { status: 400 });
    }
    const transporter = createMailTransporter({
      user: smtp.email,
      pass: smtp.password,
    });
    let attachments: Array<{ filename: string; content: Buffer; contentType: string }> = [];
    if (data.offerId) {
      const offer = await getOfferById(data.offerId);
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
      from: smtp.email,
      to: data.to,
      subject: data.subject,
      text: `${data.message.replace(/\s+$/, "")}\n\n\n`,
      attachments,
    });

    let warning: string | null = null;
    if (data.offerId) {
      try {
        await updateOfferStatus(data.offerId, "gesendet", mailLanguage);
      } catch (error) {
        console.error("Offer status update failed after successful send", error);
        warning =
          "Mail sent, but offer status update failed.";
      }
    }
    return NextResponse.json({ ok: true, warning });
  } catch (error) {
    console.error("Send offer API failed", error);
    return NextResponse.json(
      { ok: false, error: "Mailversand fehlgeschlagen" },
      { status: 500 },
    );
  }
}
