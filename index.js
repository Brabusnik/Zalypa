// Установите зависимости с помощью команды: npm install express node-telegram-bot-api

// Импорт необходимых модулей
const express = require('express');
const path = require('path');
const TelegramBot = require('node-telegram-bot-api');

// Создание экземпляра Express
const app = express();

// Настройка порта для веб-сервера
const port = process.env.PORT || 3000;

// Установка пути к статическим файлам
app.use(express.static(path.join(__dirname, 'public')));

// Запуск веб-сервера
app.listen(port, () => {
  console.log(`Сайт запущен на порту ${port}`);
});

// Токен вашего бота
const token = '5797940789:AAEhVi0rKKuqVWSPBmyXiU91bLrWMxj2Sck';

// Создание экземпляра Telegram-бота
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /adm
bot.onText(/\/adm/, (msg) => {
  const chatId = msg.chat.id;

  // Отправка инлайн-кнопки
  bot.sendMessage(chatId, '💰Тут будут логи ', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Хорошо',
            callback_data: 'good',
          },
        ],
      ],
    },
  });
});

// Обработка ответа на инлайн-кнопку
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === 'good') {
    bot.sendMessage(chatId, 'Ждем логов');
  }
});

// Запуск бота
bot.on('polling_error', (error) => {
  console.log(error);
});

console.log('Бот запущен');
