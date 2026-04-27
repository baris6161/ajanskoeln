import { NextResponse } from "next/server";
import { createOffer, listOffers, nextOfferNumber } from "@/lib/queries/offers";

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
    const offerNumber = await nextOfferNumber();
    const offer = await createOffer({
      ...body,
      offer_number: offerNumber,
    });
    return NextResponse.json(offer);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
