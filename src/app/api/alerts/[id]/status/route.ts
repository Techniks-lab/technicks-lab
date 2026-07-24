import { NextRequest, NextResponse } from "next/server";
import { updateAlertStatus, actionAlert, type AlertStatus } from "@/lib/alerta";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, action, text, timeout } = body;

    if (action) {
      const result = await actionAlert(id, action, text);
      return NextResponse.json(result);
    }

    if (!status) {
      return NextResponse.json(
        { error: "status or action is required" },
        { status: 400 },
      );
    }

    const result = await updateAlertStatus(
      id,
      status as AlertStatus,
      text,
      timeout,
    );
    return NextResponse.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update alert status";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
