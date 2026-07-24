import { NextRequest, NextResponse } from "next/server";
import {
  createAlert,
  searchAlerts,
  getAlertCounts,
  type AlertSeverity,
  type AlertStatus,
} from "@/lib/alerta";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { resource, event, environment, severity, service, group, value, text, tags, attributes, origin, type, timeout } = body;

    if (!resource || !event) {
      return NextResponse.json(
        { error: "resource and event are required" },
        { status: 400 },
      );
    }

    const result = await createAlert({
      resource,
      event,
      environment,
      severity: severity as AlertSeverity | undefined,
      service,
      group,
      value,
      text,
      tags,
      attributes,
      origin,
      type,
      timeout,
    });

    return NextResponse.json(result, {
      status: result.status === "ok" ? 201 : 200,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create alert";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const countOnly = searchParams.get("count");
    if (countOnly === "true") {
      const result = await getAlertCounts({
        environment: searchParams.get("environment") ?? undefined,
        service: searchParams.get("service") ?? undefined,
      });
      return NextResponse.json(result);
    }

    const result = await searchAlerts({
      environment: searchParams.get("environment") ?? undefined,
      service: searchParams.get("service") ?? undefined,
      status: (searchParams.get("status") as AlertStatus) ?? undefined,
      severity: (searchParams.get("severity") as AlertSeverity) ?? undefined,
      group: searchParams.get("group") ?? undefined,
      resource: searchParams.get("resource") ?? undefined,
      event: searchParams.get("event") ?? undefined,
      q: searchParams.get("q") ?? undefined,
      from: searchParams.get("from") ?? undefined,
      to: searchParams.get("to") ?? undefined,
      sort: searchParams.get("sort") ?? undefined,
      reverse: searchParams.get("reverse") === "true",
      page: searchParams.get("page") ? Number(searchParams.get("page")) : undefined,
      pageSize: searchParams.get("pageSize") ? Number(searchParams.get("pageSize")) : undefined,
    });

    return NextResponse.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to search alerts";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
