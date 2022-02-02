module.exports = {
    name: 'ready',
    execute(client) {
        console.log(`Bot Online , Logged in as ${client.user.tag}!`);
    }
}