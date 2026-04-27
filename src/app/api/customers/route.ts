import { NextResponse } from "next/server";
import { createCustomer, listCustomers } from "@/lib/queries/customers";

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
    const customer = await createCustomer(body);
    return NextResponse.json(customer);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
