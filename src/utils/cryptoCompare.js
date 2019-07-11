const request = require('request')
require('dotenv').config()

const cryptoCompare=(callback)=>{
    //add what ever crypto you are intrested in, in the link below
    const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,XRP,LINK,MIOTA&tsyms=BTC,USD,EUR&api_key=https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,XRP&tsyms=USD,EUR&api_key='+ process.env.CC_KEY

    request({url: url, json: true},(error,response,body)=>{
       // console.log(response.body)
        if(error){
            //Might have an text sent if server/internet issues
            callback('no service check your internet', undefined)
        }else{
            callback({
                cryptoCompare: response.body
            })
        
        }

    })
}
module.exports = cryptoCompare