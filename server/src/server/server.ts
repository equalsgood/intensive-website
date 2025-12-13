import express = require('express');
import bodyParser = require('body-parser')
import cors = require('cors');
import { Express } from "express";
import { sendMessageByBot } from "../bot/bot";

const app: Express = express();
app.use(cors({origin: true, credentials: true}));
const jsonParser = bodyParser.json();

app.post('/bid', jsonParser, async (req, res) => {
    const { name, desc, email, phone } = req.body;
    res.send(200);
    await sendMessageByBot({name, desc, email, phone});
})

export { app };