const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

  app.use(express.urlencoded({ extended: true }));

  app.use(express.static(path.join(__dirname, 'public')));

  app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send('All fields are required.');
    }

    res.send(`Thank you, ${name}. Your message has been received.`);
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });