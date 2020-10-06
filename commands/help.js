exports.help=async(msg,embed)=>{
    if (msg.content.match(/(파파고|papago).*(h|도움)|(h|도움).*(파파고|papago)/)){
        if(msg.content.includes('h')){
            embed.setTitle('HELP (도움말)')
            .addField('1. Please enter papago or 파파고.','1. papago 또는 파파고 라고 입력하세요.')
            .addField('2. Please select a language to be translated.','2. 번역될 언어를 선택하세요.')
            .addField('3. Please enter what you want to translate.','3. 번역할 내용을 입력하세요.')
        }else{
            embed.setTitle('도움말 (HELP)')
            .addField('1. papago 또는 파파고 라고 입력하세요.','1. Please enter papago or 파파고.')
            .addField('2. 번역될 언어를 선택하세요.','2. Please select a language to be translated.')
            .addField('3. 번역할 내용을 입력하세요.','3. Please enter what you want to translate.')
        }
        msg.channel.send(embed);
    }
}