import { app } from './server/server';
import { bot } from './bot/bot';

const start = () => {
    app.listen(5000, () => console.log('server started'));
    bot.on('message', async msg => {
        const { chat} = msg;
        await bot.sendMessage(chat.id, 'unknown message');
    })
}

start();