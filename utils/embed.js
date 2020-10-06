exports.embed=(msg,discord)=>{
	return new discord.MessageEmbed()
		.setFooter(msg.member.displayName,msg.author.avatarURL())
		.setTimestamp(new Date())
		.setColor(msg.guild.me.displayColor||process.env.color);
}