module.exports = {
    name : `ping`,
    deskription : `Command Untuk Mengetes Koneksi Bot`,
    execute(msg, args, client) {
        msg.reply(`Pong 🏓 ${Date.now() - msg.createdTimestamp}ms.`);
    }
};