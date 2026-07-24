import { NextRequest, NextResponse } from "next/server";
import { sendHeartbeat, createAlert, sendDiscordMessage } from "@/lib/alerta";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { origin, timeout, tags, attributes } = body;

    if (!origin) {
      return NextResponse.json(
        { error: "origin is required" },
        { status: 400 },
      );
    }

    const result = await sendHeartbeat(
      origin,
      timeout,
      tags,
      attributes,
    );

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send heartbeat";

    try {
      await createAlert({
        resource: "technickslab",
        event: "HeartbeatFailed",
        severity: "critical",
        text: message,
      });
      await sendDiscordMessage(
        `**Heartbeat Failed**\n${message}`,
      );
    } catch {
      // notification failure should not mask the original error
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const result = await sendHeartbeat("technickslab-app", 120, ["nextjs"], {
      version: process.env.npm_package_version ?? "0.1.0",
    });
    return NextResponse.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send heartbeat";

    try {
      await createAlert({
        resource: "technickslab",
        event: "HeartbeatFailed",
        severity: "critical",
        text: message,
      });
      await sendDiscordMessage(
        `**Heartbeat Failed**\n${message}`,
      );
    } catch {
      // notification failure should not mask the original error
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
