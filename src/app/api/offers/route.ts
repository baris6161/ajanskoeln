import { NextResponse } from "next/server";
import { createOffer, listOffers, nextOfferNumber } from "@/lib/queries/offers";
import { offerCreatePayloadSchema } from "@/lib/security/validation";

export async function GET() {
  try {
    const offers = await listOffers();
    return NextResponse.json(offers);
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
    const parsed = offerCreatePayloadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid offer payload" }, { status: 400 });
    }
    const offerNumber = await nextOfferNumber();
    const offer = await createOffer({
      ...parsed.data,
      customer_id: parsed.data.customer_id ?? null,
      offer_number: offerNumber,
    });
    return NextResponse.json(offer);
  } catch (error) {
    console.error("Create offer failed", error);
    return NextResponse.json(
      { error: "Offer creation failed" },
      { status: 500 },
    );
  }
}
