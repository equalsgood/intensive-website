import TelegramBot from 'node-telegram-bot-api';
import { config } from '../config';
import { Bid } from "../types/form.types";

export const bot = new TelegramBot(config.BOT_TOKEN);

export const sendNewBid = async (bid: Bid) => {
    const date = new Date;
    const { name, desc, phone, email} = bid;
    const message = `Новая заявка на сайте!\nДата: ${date.toLocaleString('uk-UK')};\nИмя: ${name};\nТелефон: ${phone};\nПочта: ${email};\nДополнительная информация: ${desc};`;

    return await bot.sendMessage(config.CHAT_ID, message);
};