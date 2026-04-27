import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { getOfferById } from "@/lib/queries/offers";
import { getCustomerById } from "@/lib/queries/customers";
import { OfferDocument } from "@/lib/pdf/offer-document";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const offer = await getOfferById(id);
    if (!offer) {
      return NextResponse.json({ error: "Offer not found" }, { status: 404 });
    }

    const customer = offer.customer_id ? await getCustomerById(offer.customer_id) : null;
    const url = new URL(request.url);
    const forcedLang = url.searchParams.get("lang");
    const fallbackCustomerLang: "tr" | "en" | "de" =
      customer?.language === "tr" ? "tr" : customer?.language === "de" ? "de" : "en";
    const mailLanguage: "tr" | "en" | "de" =
      forcedLang === "tr" || forcedLang === "en" || forcedLang === "de"
        ? forcedLang
        : offer.sent_language === "tr" || offer.sent_language === "en" || offer.sent_language === "de"
          ? offer.sent_language
          : fallbackCustomerLang;

    const pdfElement = React.createElement(OfferDocument, {
      offer,
      customer,
      localeOverride: mailLanguage,
    }) as unknown as Parameters<typeof renderToBuffer>[0];
    const pdfBuffer = await renderToBuffer(pdfElement);
    const download = url.searchParams.get("download") === "1";

    return new NextResponse(Buffer.from(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `${download ? "attachment" : "inline"}; filename="${offer.offer_number}.pdf"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
