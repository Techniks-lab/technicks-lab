import { NextResponse } from "next/server";
import {
  sendHeartbeat,
  createAlert,
  sendDiscordMessage,
} from "@/lib/alerta";

export async function GET() {
  const results: Record<string, { ok: boolean; data?: unknown; error?: string }> = {};

  try {
    results.heartbeat = { ok: true, data: await sendHeartbeat("technickslab-test", 120, ["test"]) };
  } catch (e) {
    results.heartbeat = { ok: false, error: e instanceof Error ? e.message : String(e) };
  }

  try {
    results.alert = {
      ok: true,
      data: await createAlert({
        resource: "technickslab",
        event: "TestAlert",
        severity: "informational",
        text: "This is a test alert from the /api/alerts/test endpoint.",
      }),
    };
  } catch (e) {
    results.alert = { ok: false, error: e instanceof Error ? e.message : String(e) };
  }

  try {
    results.discord = {
      ok: true,
      data: await sendDiscordMessage("**Test**\nAlerta integration is working."),
    };
  } catch (e) {
    results.discord = { ok: false, error: e instanceof Error ? e.message : String(e) };
  }

  const allPassed = Object.values(results).every((r) => r.ok);

  return NextResponse.json({
    status: allPassed ? "all passed" : "some failed",
    results,
  }, { status: allPassed ? 200 : 207 });
}
