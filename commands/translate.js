const papago=require('../api/papago');

exports.translate=async(msg,embed,discord)=>{
    // 한국 중국 영어 일본어 스페인 프랑스 이탈리아 러시아 독일어 태국 베트남 인도네시아
    const iconList=['🇰🇷','🇨🇳','🇬🇧','🇯🇵','🇪🇸','🇫🇷','🇮🇹','🇷🇺','🇩🇪','🇹🇭','🇻🇳','🇮🇩'];

    const filter=(reaction,user)=>{return iconList.includes(reaction.emoji.name)&&user.id===msg.author.id};

    if(msg.content==="파파고") embed.setTitle(`번역 될 언어를 선택하세요.`);
    else if(msg.content==="papago") embed.setTitle(`Please select a language to be translated.`);

    msg.channel.send(embed).then(reply=>{
        for(const i in iconList) reply.react(iconList[i]);
        reply.awaitReactions(filter,{MAX: 1,time: 12000}).then(data=>{
            const reaction=data.first();
            console.log(reaction);
        }).catch(e=>{throw e;});
    }).catch(e=>{throw e;});
    /*
    const text="안녕하세요";
    const LanguageCode=await papago.DetectLanguage(text);
    const TransText=await papago.Translation(LanguageCode.langCode,"en",text);
    embed.setTitle(`${TransText.message.result.srcLangType} → ${TransText.message.result.tarLangType}`)
    .addField(`${TransText.message.result.srcLangType} to translate`,text)
    .addField(`Translated ${TransText.message.result.tarLangType}`,TransText.message.result.translatedText);
    msg.channel.send(embed);
    */
}