import bot from './bot.js';

bot.match('message::document::file_name::/(.+)\\.HEIC$/', (ctx, match) => {
    const filename = match[1];
    console.log(ctx.message.text)
    ctx.sendMessage({
        text: `Ага, у тебя Айфон! Ты прислал файл с именем ${filename}`
    });
});

bot.polling();