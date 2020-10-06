const Discord=require('discord.js');
require('dotenv').config();

const {embed}=require('./utils/embed');
const {ping}=require('./commands/ping');
const {help}=require('./commands/help');
const {translate}=require('./commands/translate');

if(process.env.discordToken){
    const discord=new Discord.Client();
    const serverCount=discord.guilds.cache.size;
    discord.on('ready',()=>{
        console.log(require('colors').green(`Login in as ${discord.user.tag}`));
    });
    discord.on('message',async msg=>{
        try{
            if (msg.author.bot) return;
            if(msg.content.includes('파파고')||msg.content.includes('papago')){
                help(msg,embed(msg,Discord));
                ping(msg,embed(msg,Discord),discord);
                translate(msg,embed(msg,Discord));
            }
        } catch(e){
            throw e;
        }
    });
    setInterval(async()=>{
        if(serverCount!==discord.guilds.cache.size){
            await discord.user.setActivity(`${discord.guilds.cache.size}개의 서버에서 번역 중`);
        }
    },10000);
    discord.login(process.env.discordToken);
}