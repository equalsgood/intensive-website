import express = require('express');
import cors = require('cors');
import { Express } from "express";
import { config } from "./config";
import rootRouter from "./routes";

const app: Express = express();

app.use(express.json());

app.use(cors({
    origin: config.FRONTEND_URL,
    methods: ['POST'],
    optionsSuccessStatus: 200
}));

app.use('/api', rootRouter);

export default app;