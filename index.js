const {Client, Collection, Intents} = require('discord.js');
const fs = require("fs");
const config = require("./utils/config.json");


const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const eventFiles = fs.readdirSync("./events").filter((file) => file.endsWith(".js"));

for ( const file of eventFiles ) {
    const event = require(`./events/${file}`);
    if( event.once ) {
        client.once(event.name, (args) => event.execute(args, client))
    } else {
        client.on(event.name, (args) => event.execute(args, client))
    }
}

// Login bot
client.login(config.API_TOKEN);