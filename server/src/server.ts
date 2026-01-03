import app from './app';
import { config } from "./config";
import { bot } from './services/telegram.service';

const server = app.listen(config.PORT, () => {
    console.log('Server is running!');
});

const shutdown = async (signal: string) => {
    console.log(`\nStarting graceful shutdown by ${signal}...`);

    server.close(() => {
        console.log('HTTP server closed.');

        if (bot.isPolling()) {
            bot.stopPolling()
                .then(() => {
                    console.log('Telegram Bot connections closed.');
                    process.exit(0);
                })
                .catch((err) => {
                    console.error('Error closing Telegram Bot:', err);
                    process.exit(1);
                });
        } else {
            process.exit(0);
        }
    });

    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));