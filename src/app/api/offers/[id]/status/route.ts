import { NextResponse } from "next/server";
import { updateOfferStatus } from "@/lib/queries/offers";
import { OfferStatus } from "@/lib/types";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const offer = await updateOfferStatus(id, body.status as OfferStatus);
    return NextResponse.json(offer);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
