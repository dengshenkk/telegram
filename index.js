var TelegramBot = require('node-telegram-bot-api'),
  // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
  telegram = new TelegramBot('bot685007606:AAHain6mgaHDIUd6lrBCh7SkqeTBSX9x3vU', {polling: true})

telegram.on('text', (message) => {
  console.log(message)
  telegram.sendMessage(message.chat.id, 'Hello world')
})

