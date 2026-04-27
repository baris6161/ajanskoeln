import { NextResponse } from "next/server";
import { deleteOffer, updateOffer } from "@/lib/queries/offers";
import { offerUpdatePayloadSchema } from "@/lib/security/validation";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = offerUpdatePayloadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid offer payload" }, { status: 400 });
    }
    const offer = await updateOffer(id, parsed.data);
    return NextResponse.json(offer);
  } catch (error) {
    console.error("Update offer failed", error);
    return NextResponse.json(
      { error: "Offer update failed" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    await deleteOffer(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Delete offer failed", error);
    return NextResponse.json(
      { error: "Offer delete failed" },
      { status: 500 },
    );
  }
}
