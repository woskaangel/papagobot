
const Discord=require('discord.js');
const fs=require('fs');
const colors=require('colors');

const {embed}=require('./utils/embed');
const {ping}=require('./commands/ping');
const {help}=require('./commands/help');
const {translate}=require('./commands/translate');

require('dotenv').config();

if(process.env.discordToken){
    const discord=new Discord.Client();
    discord.on('ready',()=>{
        console.log(colors.green(`Login in as ${discord.user.tag}`));
    });
    discord.on('message',async msg=>{
        try{
            if (msg.author.bot) return;
            if(msg.content.includes('파파고')||msg.content.includes('papago')){
                help(msg,embed(msg,Discord));
                ping(msg,embed(msg,Discord),discord);
                translate(msg,embed(msg,Discord),discord);
            }
        }catch(e){
            console.warn(e);
        }
    });
    discord.login(process.env.discordToken);
}