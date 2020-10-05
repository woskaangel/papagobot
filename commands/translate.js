const papago=require('../api/papago');

exports.translate=async(msg,embed)=>{
    if(msg.content==="파파고"){
        await embed.setTitle(`번역 될 언어를 선택하세요.`);
    } else if(msg.content==="papago"){
        await embed.setTitle(`Please select a language to be translated.`);
    } else{
        return;
    }
    let sendMsg=await msg.channel.send(embed);

    const iconList=['🇰🇷','🇨🇳','🇬🇧','🇯🇵','🇪🇸','🇫🇷','🇮🇹','🇷🇺','🇩🇪','🇹🇭','🇻🇳','🇮🇩'];
    const codeList=['ko','zh-CN','en','ja','es','fr','it','ru','de','th','vi','id'];
    const koreaList=['한국어','중국어','영어','일본어','스페인어','프랑스어','이탈리아어','러시아어','독일어','태국어','베트남어','인도네시아어'];
    const englishList=['Korean','Chinese','English','Japanese','Spanish','French','Italian','Russian','German','Thai','Vietnamese','Indonesian'];
    try{
        for(const i in iconList) await sendMsg.react(iconList[i]);
    } catch(e){ // emoji error
        throw e;
    }
    const userFilter=(user)=>{
        return user.author.id==msg.author.id;
    };
    const emojiFilter=(reaction)=>{
        return iconList.includes(reaction.emoji.name)
    };
    let translatdLanguage=1; // 번역할 언어
    let timeState=true;
    sendMsg.awaitReactions(emojiFilter,{MAX: 1,time: 60000,errors: [`time`]}).then(collected=>{
        const reaction=collected.first();
        for(const i in iconList){
            if(reaction.emoji.name==iconList[i]){
                console.log(i);
                translatdLanguage=i;
                break;
            }
        }
        sendMsg.reactions.removeAll().catch(e=>{throw e;});
    }).catch(()=>{ // time out
        // sendMsg.reactions.removeAll().catch(e=>{throw e;});
        embed.fields=[];
        if(msg.content==="파파고"){
            embed.setTitle(`시간초과!`);
        } else if(msg.content==="papago"){
            embed.setTitle(`Time Over!`);
        }
        sendMsg.edit(embed);
        timeState=false;
    });
    if(timeState==false) return;
    // Translate Message Update
    embed.fields=[];
    if(msg.content==="파파고"){
        await embed.setTitle(`번역할 내용을 입력해주세요.`);
    } else if(msg.content==="papago"){
        await embed.setTitle(`Please enter what you want to translate.`);
    }
    await sendMsg.edit(embed);
    // TextAwait
    let receiveText;
    await msg.channel.awaitMessages(userFilter,{max: 1,time: 60000,errors: [`time`]}).then(collected=>{
        receiveText=collected.first().content;
    }).catch(()=>{ // time out
        embed.fields=[];
        if(msg.content==="파파고"){
            embed.setTitle(`시간초과!`);
        } else if(msg.content==="papago"){
            embed.setTitle(`Time Over!`);
        }
        sendMsg.edit(embed);
        timeState=false;
    });
    if(timeState==false) return;
    // Translate using naver api
    const LanguageCode=await papago.DetectLanguage(receiveText);
    const TransText=await papago.Translation(LanguageCode.langCode,codeList[translatdLanguage],receiveText);
    // Update Translate Message
    let srcLanguage;
    let tarLanguage;
    for(const i in codeList){
        if(TransText.message.result.srcLangType===codeList[i]) srcLanguage=i;
        if(TransText.message.result.tarLangType===codeList[i]) tarLanguage=i;
    }
    embed.fields=[];
    if(msg.content==="파파고"){
        await embed.setTitle(`${koreaList[srcLanguage]} → ${koreaList[tarLanguage]}`)
        .addField(`입력한 언어 : ${koreaList[srcLanguage]}`,receiveText)
        .addField(`번역된 언어 : ${koreaList[tarLanguage]}`,TransText.message.result.translatedText);
    } else if(msg.content==="papago"){
        await embed.setTitle(`${englishList[srcLanguage]} → ${englishList[tarLanguage]}`)
        .addField(`Input language : ${englishList[srcLanguage]}`,receiveText)
        .addField(`translated language : ${englishList[tarLanguage]}`,TransText.message.result.translatedText);
    }
    await sendMsg.edit(embed);
}