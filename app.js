const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    res.send(`
        <h1>Thanks, ${name}!</h1>
        <p>We received your message:</p>
        <blockquote>${message}</blockquote>
        <p>We'll reach out to you at <strong>${email}</strong>.</p>
        <a href="/contact.html">Back to Contact Page</a>
    `);
});

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});