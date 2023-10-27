import { nodeBotAsync } from "telegrambo";
import onMatch from "telegrambo-on-match";
import polling from "telegrambo-polling";

const bot = nodeBotAsync(process.env.BOT_TOKEN);
bot.match = onMatch(bot);
bot.polling = polling(bot);

export default bot;