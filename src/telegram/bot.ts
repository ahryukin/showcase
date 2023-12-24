import TelegramBot from "node-telegram-bot-api"
const channelId = process.env.NEXT_TG_CHANNEL_ID
const botToken = process.env.NEXT_TG_BOT_TOKEN
const bot = botToken && new TelegramBot(botToken, { polling: false })

export const sendTelegramMessage = async (message: string) => {
  if (!bot) throw new Error("BotToken is undefined")
  if (!channelId) throw new Error("ChannelId is undefined")
  await bot.sendMessage(channelId, message, {
    parse_mode: "HTML",
  })
}
