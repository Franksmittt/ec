import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  // Wire to CRM / email here. For now we accept and log server-side.
  console.info("[Electro City lead]", {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
