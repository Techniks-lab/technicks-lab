import { NextRequest, NextResponse } from "next/server";
import { notifyDeploy } from "@/lib/alerta";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { version, deployedBy } = body;

    if (!version) {
      return NextResponse.json(
        { error: "version is required" },
        { status: 400 },
      );
    }

    await notifyDeploy(version, deployedBy);

    return NextResponse.json({ status: "ok", message: "Deploy notification sent" });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send deploy notification";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
