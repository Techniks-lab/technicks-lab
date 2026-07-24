const ALERTA_API_URL = process.env.ALERTA_API_URL;
const ALERTA_API_KEY = process.env.NEXT_ALERTAKEY;
const ALERTA_API_SECRET = process.env.ALERTA_API_SECRET;
const ALERTA_CHANNEL_REF = process.env.ALERTA_CHANNEL_REF;

if (!ALERTA_API_URL) {
  throw new Error("ALERTA_API_URL is not set in environment variables");
}

if (!ALERTA_API_KEY) {
  throw new Error("NEXT_ALERTAKEY is not set in environment variables");
}

if (!ALERTA_API_SECRET) {
  throw new Error("ALERTA_API_SECRET is not set in environment variables");
}

if (!ALERTA_CHANNEL_REF) {
  throw new Error("ALERTA_CHANNEL_REF is not set in environment variables");
}

export type AlertSeverity =
  | "critical"
  | "major"
  | "minor"
  | "warning"
  | "informational"
  | "debug"
  | "trace"
  | "indeterminate"
  | "clear"
  | "normal"
  | "ok";

export type AlertStatus =
  | "open"
  | "assign"
  | "ack"
  | "shelved"
  | "closed"
  | "expired";

export interface AlertaAlert {
  id: string;
  resource: string;
  event: string;
  environment: string;
  severity: AlertSeverity;
  status: AlertStatus;
  group: string;
  value: string;
  text: string;
  tags: string[];
  attributes: Record<string, unknown>;
  origin: string;
  type: string;
  createTime: string;
  timeout: number;
  duplicateCount: number;
  repeat: boolean;
  previousSeverity: AlertSeverity;
  trendIndication: string;
  history: AlertHistoryEntry[];
  href: string;
}

export interface AlertHistoryEntry {
  event: string;
  href: string;
  id: string;
  severity: AlertSeverity | null;
  status: AlertStatus | null;
  text: string;
  type: string;
  updateTime: string;
  value: string | null;
}

export interface AlertaResponse {
  status: string;
  id: string;
  alert?: AlertaAlert;
  message?: string;
}

export interface AlertaAlertsResponse {
  status: string;
  alerts: AlertaAlert[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
  more: boolean;
  severityCounts: Record<string, number>;
  statusCounts: Record<string, number>;
  lastTime: string;
}

export interface AlertaCountsResponse {
  status: string;
  total: number;
  severityCounts: Record<string, number>;
  statusCounts: Record<string, number>;
}

export interface AlertaHeartbeat {
  id: string;
  origin: string;
  tags: string[];
  attributes: Record<string, unknown>;
  createTime: string;
  timeout: number;
  latency: number;
  status: string;
  receiveTime: string;
  since: number;
}

export interface AlertaHeartbeatResponse {
  status: string;
  id: string;
  heartbeat: AlertaHeartbeat;
}

export interface CreateAlertParams {
  resource: string;
  event: string;
  environment?: string;
  severity?: AlertSeverity;
  service?: string[];
  group?: string;
  value?: string;
  text?: string;
  tags?: string[];
  attributes?: Record<string, unknown>;
  origin?: string;
  type?: string;
  timeout?: number;
}

export interface SearchAlertsParams {
  environment?: string;
  service?: string;
  status?: AlertStatus;
  severity?: AlertSeverity;
  group?: string;
  resource?: string;
  event?: string;
  q?: string;
  from?: string;
  to?: string;
  sort?: string;
  reverse?: boolean;
  page?: number;
  pageSize?: number;
}

async function alertaFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const url = `${ALERTA_API_URL}${path}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Key ${ALERTA_API_KEY}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Alerta API error ${response.status}: ${body}`,
    );
  }

  return response.json() as Promise<T>;
}

export async function createAlert(
  params: CreateAlertParams,
): Promise<AlertaResponse> {
  return alertaFetch<AlertaResponse>("/alert", {
    method: "POST",
    body: JSON.stringify({
      resource: params.resource,
      event: params.event,
      environment: params.environment ?? "Production",
      severity: params.severity ?? "warning",
      service: params.service,
      group: params.group ?? "Misc",
      value: params.value,
      text: params.text,
      tags: params.tags,
      attributes: params.attributes,
      origin: params.origin ?? "technickslab",
      type: params.type,
      timeout: params.timeout ?? 86400,
    }),
  });
}

export async function searchAlerts(
  params: SearchAlertsParams = {},
): Promise<AlertaAlertsResponse> {
  const searchParams = new URLSearchParams();
  if (params.environment) searchParams.set("environment", params.environment);
  if (params.service) searchParams.set("service", params.service);
  if (params.status) searchParams.set("status", params.status);
  if (params.severity) searchParams.set("severity", params.severity);
  if (params.group) searchParams.set("group", params.group);
  if (params.resource) searchParams.set("resource", params.resource);
  if (params.event) searchParams.set("event", params.event);
  if (params.q) searchParams.set("q", params.q);
  if (params.from) searchParams.set("from-date", params.from);
  if (params.to) searchParams.set("to-date", params.to);
  if (params.sort) searchParams.set("sort-by", params.sort);
  if (params.reverse !== undefined)
    searchParams.set("reverse", String(params.reverse));
  if (params.page) searchParams.set("page", String(params.page));
  if (params.pageSize) searchParams.set("page-size", String(params.pageSize));

  const qs = searchParams.toString();
  return alertaFetch<AlertaAlertsResponse>(`/alerts${qs ? `?${qs}` : ""}`);
}

export async function getAlert(id: string): Promise<AlertaResponse> {
  return alertaFetch<AlertaResponse>(`/alert/${id}`);
}

export async function updateAlertStatus(
  id: string,
  status: AlertStatus,
  text?: string,
  timeout?: number,
): Promise<AlertaResponse> {
  return alertaFetch<AlertaResponse>(`/alert/${id}/status`, {
    method: "PUT",
    body: JSON.stringify({ status, text, timeout }),
  });
}

export async function actionAlert(
  id: string,
  action: "ack" | "unack" | "shelve" | "unshelve" | "close",
  text?: string,
): Promise<AlertaResponse> {
  return alertaFetch<AlertaResponse>(`/alert/${id}/action`, {
    method: "PUT",
    body: JSON.stringify({ action, text }),
  });
}

export async function getAlertCounts(
  params: { environment?: string; service?: string } = {},
): Promise<AlertaCountsResponse> {
  const searchParams = new URLSearchParams();
  if (params.environment) searchParams.set("environment", params.environment);
  if (params.service) searchParams.set("service", params.service);

  const qs = searchParams.toString();
  return alertaFetch<AlertaCountsResponse>(
    `/alerts/count${qs ? `?${qs}` : ""}`,
  );
}

export async function deleteAlert(id: string): Promise<{ status: string }> {
  return alertaFetch<{ status: string }>(`/alert/${id}`, {
    method: "DELETE",
  });
}

export async function sendHeartbeat(
  origin: string,
  timeout = 120,
  tags: string[] = [],
  attributes: Record<string, unknown> = {},
): Promise<AlertaHeartbeatResponse> {
  return alertaFetch<AlertaHeartbeatResponse>("/heartbeat", {
    method: "POST",
    body: JSON.stringify({ origin, timeout, tags, attributes }),
  });
}

// ─── Discord Integration ────────────────────────────────────────────

export interface DiscordSendResponse {
  statusCode: number;
  message: string;
  data: {
    messageId: string;
    threadId: string;
    channelId: string;
    channelRef: string;
    balance: number;
  };
}

export interface DiscordReplyResponse {
  statusCode: number;
  message: string;
  data: {
    balance: number;
  };
}

export interface DiscordThreadResponse {
  statusCode: number;
  message: string;
  data: {
    rootChannelId: string;
    baseMessageId: string;
    threadChannelId: string;
    threadName: string;
    balance: number;
  };
}

async function discordFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const url = `${ALERTA_API_URL}${path}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "x-api-key": ALERTA_API_KEY!,
      "x-api-secret": ALERTA_API_SECRET!,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Alerta Discord API error ${response.status}: ${body}`);
  }

  return response.json() as Promise<T>;
}

export async function sendDiscordMessage(
  message: string,
  channelRef?: string,
): Promise<DiscordSendResponse> {
  return discordFetch<DiscordSendResponse>("/discord/send", {
    method: "POST",
    body: JSON.stringify({
      channelRef: channelRef ?? ALERTA_CHANNEL_REF,
      message,
    }),
  });
}

export async function replyDiscordMessage(
  message: string,
  channelId: string,
  threadId: string,
  channelRef?: string,
): Promise<DiscordReplyResponse> {
  return discordFetch<DiscordReplyResponse>("/discord/reply", {
    method: "POST",
    body: JSON.stringify({
      channelRef: channelRef ?? ALERTA_CHANNEL_REF,
      channelId,
      threadId,
      message,
    }),
  });
}

export async function startDiscordThread(
  title: string,
  message: string,
  channelRef?: string,
): Promise<DiscordThreadResponse> {
  return discordFetch<DiscordThreadResponse>("/discord/start-thread", {
    method: "POST",
    body: JSON.stringify({
      channelRef: channelRef ?? ALERTA_CHANNEL_REF,
      title,
      message,
    }),
  });
}

export async function sendDiscordThreadMessage(
  threadChannelId: string,
  message: string,
  channelRef?: string,
): Promise<DiscordReplyResponse> {
  return discordFetch<DiscordReplyResponse>("/discord/send-thread-message", {
    method: "POST",
    body: JSON.stringify({
      channelRef: channelRef ?? ALERTA_CHANNEL_REF,
      threadChannelId,
      message,
    }),
  });
}

// ─── Convenience Helpers ────────────────────────────────────────────

export async function notifyError(
  event: string,
  details: string,
  severity: AlertSeverity = "critical",
): Promise<void> {
  try {
    await createAlert({
      resource: "technickslab",
      event,
      severity,
      text: details,
    });
    await sendDiscordMessage(`**${event}**\n${details}`);
  } catch {
    // best-effort notification
  }
}

export async function notifyDeploy(
  version: string,
  deployedBy?: string,
): Promise<void> {
  try {
    const who = deployedBy ? ` by ${deployedBy}` : "";
    await sendDiscordMessage(
      `**Deployment**\nVersion \`${version}\` deployed${who}`,
    );
  } catch {
    // best-effort notification
  }
}
