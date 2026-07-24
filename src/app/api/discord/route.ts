import { NextRequest, NextResponse } from "next/server";
import {
  sendDiscordMessage,
  replyDiscordMessage,
  startDiscordThread,
  sendDiscordThreadMessage,
} from "@/lib/alerta";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, message, channelId, threadId, threadChannelId, title, channelRef } = body;

    if (!message) {
      return NextResponse.json(
        { error: "message is required" },
        { status: 400 },
      );
    }

    switch (action) {
      case "send": {
        const result = await sendDiscordMessage(message, channelRef);
        return NextResponse.json(result);
      }

      case "reply": {
        if (!channelId || !threadId) {
          return NextResponse.json(
            { error: "channelId and threadId are required for reply" },
            { status: 400 },
          );
        }
        const result = await replyDiscordMessage(
          message,
          channelId,
          threadId,
          channelRef,
        );
        return NextResponse.json(result);
      }

      case "start-thread": {
        if (!title) {
          return NextResponse.json(
            { error: "title is required for start-thread" },
            { status: 400 },
          );
        }
        const result = await startDiscordThread(title, message, channelRef);
        return NextResponse.json(result);
      }

      case "send-thread-message": {
        if (!threadChannelId) {
          return NextResponse.json(
            { error: "threadChannelId is required for send-thread-message" },
            { status: 400 },
          );
        }
        const result = await sendDiscordThreadMessage(
          threadChannelId,
          message,
          channelRef,
        );
        return NextResponse.json(result);
      }

      default: {
        const result = await sendDiscordMessage(message, channelRef);
        return NextResponse.json(result);
      }
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send Discord message";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
