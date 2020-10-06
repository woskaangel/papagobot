const request=require('request');

exports.DetectLanguage=async(query)=>{
    return new Promise((resolve,reject)=>{    
        request.post({
            url: "https://openapi.naver.com/v1/papago/detectLangs",
            form: {"query": query},
            headers: {
                "X-Naver-Client-Id": process.env.clientId, 
                "X-Naver-Client-Secret": process.env.clientSecret
            }
        },(err,res,body)=>{
            if(err) reject(err);
            else resolve(JSON.parse(body));
        });
    });
}
exports.Translation=async(source,target,query)=>{
    return new Promise((resolve,reject)=>{
    request.post({
            url: "https://openapi.naver.com/v1/papago/n2mt",
            form: {
                "source": source, 
                "target": target,
                "text": query
            },
            headers: {
                "X-Naver-Client-Id": process.env.clientId, 
                "X-Naver-Client-Secret": process.env.clientSecret
            }
        },(err,res,body)=>{
            if(err) reject(err);
            else resolve(JSON.parse(body));
        });
    });   
}