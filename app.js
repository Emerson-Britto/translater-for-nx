const express = require('express');
const path = require('node:path')
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors({ origin: true, credentials: true }));

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    console.log(`
        ----------------------------
        NEW REQUEST: ${req.url};
        DATE: ${new Date()};
        ----------------------------
    `);
    next();
})

app.get('/', (req, res) => {
    res.json({
        title: 'Translater',
        author: 'Emerson-Britto',
        description: "A Translater for Nexa"
    });
});

app.post('/translate', require('./translate'));
module.exports = app;
