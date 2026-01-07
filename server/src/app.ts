import express = require('express');
import cors = require('cors');
import { Express } from "express";
import helmet from 'helmet';
import hpp from 'hpp';
import { config } from "./config";
import { errorHandler } from "./middlewares/error.middleware";
import rootRouter from "./routes";
import { pinoHttp } from "pino-http";
import logger from "./utils/logger";

const app: Express = express();

if (config.MODE === 'production') {
    app.set('trust proxy', 1);
}

app.use(pinoHttp({ logger }));

app.use(helmet());

app.use(express.json());

app.use(hpp());

app.use(cors({
    origin: config.FRONTEND_URL,
    methods: ['POST'],
    optionsSuccessStatus: 200
}));

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
app.use('/api', rootRouter);

app.use(errorHandler);

export default app;