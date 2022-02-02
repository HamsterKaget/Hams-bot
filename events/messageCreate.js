const commands = require("../config/commandHandler");
const config = require("../utils/config.json");

module.exports = {
    name: 'messageCreate',
    execute(msg, client) {
        // Mengecek Siapa Pengirim Pesan ( jika pengirim pesan bot maka diabaikan )
        if(msg.author.bot) return;

        // Multiple Prefix Start
        let args = "";

        config.prefix.forEach((prefix) => {
            if(msg.content.startsWith(prefix)) {
                args = msg.content.substring(prefix.length).split(" ");
            }
        });

        if(!args) return;
        commands.get(args[0]).execute(msg, args, client);
        // Multiple Prefix End

        // Memanggil Commands
        // switch (args[0]) {
        //     case "ping":
        //         commands.get("ping").execute(msg);
        //         break;
        //     case "info":
        //         commands.get("info").execute(msg, args);
        //         break;
        //     default:
        //         break;
        // }
    }
}