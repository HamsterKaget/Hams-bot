const { MessageEmbed } = require("discord.js");
const config = require("../utils/config.json");

module.exports = {
    name : `info`,
    deskription : `Command Untuk Mengetahui Info User Maupun Bot`,
    execute(msg, args, client) {
        if (args[1]) {
            if(args[1] === "bot") {
                
                const embedBot = new MessageEmbed()
                .setTitle(client.user.username)
                .setColor(0xFBAB7E)
                .setThumbnail(client.user.displayAvatarURL(true))
                .setDescription(
                    `Hajimemashite 👋!

                    Aku Adalah **${client.user.username}** Aku dibuat menggunakan salah satu library bernama **discord.js** oleh Radja Aulia Al Ramdani a.k.a @HamsterKaget `
                    
                )
                .addFields([
                    {
                        name: 'Version',
                        value: config.version,
                        inline: true,
                    },
                    {
                        name: 'Develop by',
                        value: '[HamsterKaget](https://instagram.com/hamsterkageet)',
                        inline: true,
                    },
                    {
                        name: 'Follow Us',
                        value: '[Instagram](https://instagram.com/hamsterkageet)',
                        inline: true,
                    }, 
                    {
                        name: 'Source Code',
                        value: '[Github](https://github.com/HamsterKaget)',
                        inline: true,
                    },
                    {
                        name: 'Join Comunity',
                        value: '[HamsterArea](https://dsc.gg/hamsterarea)',
                        inline: true,
                    },
                    {
                        name: 'Our Services',
                        value: '[Jasa Discord](https://instagram.com/discordstoreid)',
                        inline: true,
                    }, 
                ])
                .setImage('https://cdn.discordapp.com/attachments/938314179696287754/938314597201481748/Hamster_Area.png')
                .setFooter('© HamsterKaget Studio | 2021 - 2022');

                msg.channel.send({
                    embeds: [
                        embedBot
                    ]
                })


            } else if (args[1] === "user") {
                
                let mention = msg.mentions.users.first() || msg.author; 
                let member = msg.guild.members.cache.get(mention.id);

                const embedUser = new MessageEmbed()
                .setTitle(`Info ${member.user.username}`)
                .setColor(`0x85FFBD`)
                .addFields;

                msg.channel.send({embeds: [embedUser]})















            } 
        } else {
            msg.reply(`Command Salah !\n1.info bot\n2.info user`);
        }
    },
};