require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.Token_Telegram;

const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  console.log(msg)
  let date = new Date();

  if(date.getHours() > 9 && date.getHours < 18){
    bot.sendMessage(chatId, 'https://faesa.br');
  }
  else{
    console.log(msg.text)
    if(msg.text.includes('@')){
      bot.sendMessage(chatId, 'Recebemos o seu Email, aguarde e logo entraremos em contato.');
    }
    else{
      bot.sendMessage(chatId, 'Olá, nosso funcionamento é das 09 as 18 horas, poderia nos informar o seu e-mail para possamos entrar em contato?');
    }
    
  }
});

