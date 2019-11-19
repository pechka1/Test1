
const express = require('express');
const bodyParser = require('body-parser');
const main = express();
const TelegramBot = require('node-telegram-bot-api');

const token = '1026049763:AAFam08Rt90CXtDGcwM2FLJI_m49PR-nlfY';
const bot = new TelegramBot(token, {polling: true});
const chatId = -393172239;


main.use(bodyParser.urlencoded({ extended: false }));
main.use(bodyParser.json());

main.use(express.urlencoded({ extended: true }));
main.set('view engine', 'html');
main.use(express.static(__dirname + '/'));

// main.get('/', function (req, res) {
//     res.sendFile('index.html', {root : __dirname });
//   });


main.post('/submit', (req, res) => {
    console.log('req.body', req.body);
    let contactForm = `Name: ${req.body.name}\nEmail: ${req.body.email}\nPhone: ${req.body.phone}\nSubject:${req.body.subject}\nMessage: ${req.body.messagetext}`
    bot.sendMessage(chatId,contactForm,{callback});
    res.status(200).end();
    // if (res.status == 200){success}
    //   else {error}

  });



main.listen(3000,() =>console.log('Server started...'));


////////////////////////////////////////////////////////////////////////////////////
// const TelegramBot = require('node-telegram-bot-api');

// // replace the value below with the Telegram token you receive from @BotFather
// const token = '1026049763:AAFam08Rt90CXtDGcwM2FLJI_m49PR-nlfY';

// // Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot(token, {polling: true});

// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// // Listen for any kind of message. There are different kinds of
// // messages.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });


/////////////////////////////////////////////////////////////////////////////////////