import dotenv from 'dotenv';
dotenv.config();

interface Config {
    PORT: number;
    BOT_TOKEN: string;
    CHAT_ID: string;
    MODE: string;
    FRONTEND_URL: string;
    TURNSTILE: string;
}

const getEnv = (key: string, defaultValue?: string): string => {
    const value = process.env[key] || defaultValue;

    if (!value) {
        throw new Error(`Configuration Error: Missing environment variable [${key}]`);
    }

    return value;
};

export const config: Config = {
    PORT: parseInt(getEnv('PORT', '3000'), 10),
    BOT_TOKEN: getEnv('BOT_TOKEN'),
    CHAT_ID: getEnv('CHAT_ID'),
    MODE: getEnv('MODE', 'development'),
    FRONTEND_URL: getEnv('FRONTEND_URL'),
    TURNSTILE: getEnv('TURNSTILE'),
};