exports.ping=async(msg,embed,discord)=>{
    if (msg.content.match(/(파파고|papago).*(핑|ping)|(핑|ping).*(파파고|papago)/)){
        embed.setTitle(msg.content.includes('핑')?'퐁':'Pong')
        .addField('Server Time','Measuring...')
        .addField('Delay Time','Measuring...');
        let pingMsg=await msg.channel.send(embed);
        embed.fields=[];
        embed.addField('Server Time',Math.round(discord.ws.ping)+'ms')
        .addField('Delay Time',pingMsg.createdTimestamp-msg.createdTimestamp+'ms');
        pingMsg.edit(embed);
    }
}