import { NextResponse } from "next/server";
import { updateOfferStatus } from "@/lib/queries/offers";
import { offerStatusPayloadSchema } from "@/lib/security/validation";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = offerStatusPayloadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid status payload" }, { status: 400 });
    }
    const offer = await updateOfferStatus(id, parsed.data.status);
    return NextResponse.json(offer);
  } catch (error) {
    console.error("Update offer status failed", error);
    return NextResponse.json(
      { error: "Offer status update failed" },
      { status: 500 },
    );
  }
}
