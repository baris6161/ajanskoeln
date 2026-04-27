import { NextResponse } from "next/server";
import { createCustomer, listCustomers } from "@/lib/queries/customers";
import { customerPayloadSchema } from "@/lib/security/validation";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get("search") ?? "";
    const customers = await listCustomers(search);
    return NextResponse.json(customers);
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
    const parsed = customerPayloadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid customer payload" }, { status: 400 });
    }
    const customer = await createCustomer(parsed.data);
    return NextResponse.json(customer);
  } catch (error) {
    console.error("Create customer failed", error);
    return NextResponse.json(
      { error: "Customer creation failed" },
      { status: 500 },
    );
  }
}
