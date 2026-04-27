import { NextResponse } from "next/server";
import { deleteCustomer, updateCustomer } from "@/lib/queries/customers";
import { customerUpdatePayloadSchema } from "@/lib/security/validation";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = customerUpdatePayloadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid customer payload" }, { status: 400 });
    }
    const customer = await updateCustomer(id, parsed.data);
    return NextResponse.json(customer);
  } catch (error) {
    console.error("Update customer failed", error);
    return NextResponse.json(
      { error: "Customer update failed" },
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
    await deleteCustomer(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Delete customer failed", error);
    return NextResponse.json(
      { error: "Customer delete failed" },
      { status: 500 },
    );
  }
}
