const {Collection} = require("discord.js");
const fs = require("fs");

// Command Handler
const commands = new Collection();
const files = fs.readdirSync("./Commands").filter((file) => file.endsWith(".js"));

for ( const file of files ) {
    const command = require(`../Commands/${file}`);
    commands.set(command.name, command);

}

module.exports = commands;