import TelegramApi = require('node-telegram-bot-api');
const token = '8519137952:AAGARWyYXhya17P60r1DgAPh_MDcl3D9dh4';

interface Bid {
    name: string;
    email: string;
    phone: string;
    desc?: string;
}

export const bot = new TelegramApi(token, { polling: true });

export const sendMessageByBot = async (bid: Bid) => {
    const { name, desc, phone, email} = bid;
    const date = new Date;
    await bot.sendMessage(7035959218, `Новая заявка на сайте!\nДата: ${date.toLocaleString('uk-UK')};\nИмя: ${name};\nТелефон: ${phone};\nПочта: ${email};\nДополнительная информация: ${desc};`)
}