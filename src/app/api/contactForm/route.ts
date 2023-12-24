import { sendTelegramMessage } from "@/telegram/bot"
import { contactFormToTelegramMsg } from "@/utils/contactFormToTelegramMsg"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    await sendTelegramMessage(contactFormToTelegramMsg(data))
    return NextResponse.json("", { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    )
  }
}
