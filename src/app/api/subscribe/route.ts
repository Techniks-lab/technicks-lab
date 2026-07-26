import { NextRequest, NextResponse } from "next/server";
import { sendDiscordMessage } from "@/lib/alerta";

export async function POST(request: NextRequest) {
  try {
    const { email, product } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "email is required" },
        { status: 400 },
      );
    }

    const lines = [
      "🔔 **New Subscriber**",
      `**Product:** ${product ?? "General"}`,
      `**Email:** ${email}`,
    ];

    await sendDiscordMessage(lines.join("\n"));

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to process subscription";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
