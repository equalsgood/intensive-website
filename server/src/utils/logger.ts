import pino from 'pino';
import { config } from '../config';

const logger = pino({
    level: config.MODE === 'production' ? 'info' : 'debug',
    transport: config.MODE !== 'production'
        ? {
            target: 'pino-pretty',
            options: {
                colorize: true,
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
            },
        }
        : undefined,
});

export default logger;