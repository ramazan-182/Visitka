const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  try {
    const stats = await db.getStats();
    const latestMessages = await db.getLatestMessages(3);
    const success = req.query.success === '1';

    res.render('index', {
      success,
      stats,
      latestMessages,
    });
  } catch (error) {
    console.error('Ошибка на главной странице:', error);
    res.status(500).send('Ошибка сервера');
  }
});

app.get('/messages', async (req, res) => {
  try {
    const messages = await db.getMessages();
    res.render('messages', { messages });
  } catch (error) {
    console.error('Ошибка при загрузке сообщений:', error);
    res.status(500).send('Ошибка сервера');
  }
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('Пожалуйста, заполните все поля.');
  }

  try {
    await db.createMessage({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    res.redirect('/?success=1');
  } catch (error) {
    console.error('Ошибка при сохранении обращения:', error);
    res.status(500).send('Не удалось отправить форму.');
  }
});

(async () => {
  try {
    await db.init();
    app.listen(PORT, () => {
      console.log(`Сайт запущен: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Ошибка запуска приложения:', error);
    process.exit(1);
  }
})();
