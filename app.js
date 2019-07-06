const crypto = require('./src/utils/cryptoCompare')
const sendEmail = require('./src/emails/account')
let schedule = require('node-schedule')
const express = require('express')

/* TODO: 
    1. Add Email/Text Function [✔]
    2. create scheduler [✔]
    3. upload to web server
    4. Call a buy order at a certain price
    5. Move to Ledger
    6. Move money from ledger to exchange
    7. exchange to bank 
    */

    const app = express()

    app.get('',(req, res)=>{

        

        var rule = new schedule.RecurrenceRule();
        rule.dayOfWeek = [0, new schedule.Range(1, 6)]
        rule.hour =  [9,12,16,21]; 
        rule.minute = 0;
         
        var j = schedule.scheduleJob(rule, ()=>{

            crypto((cryptoCurrency)=>{

                const XRP_USD = cryptoCurrency.cryptoCompare.XRP.USD;
                const ETH_USD = cryptoCurrency.cryptoCompare.ETH.USD;
                const LINK_USD = cryptoCurrency.cryptoCompare.LINK.USD;

                sendEmail(()=>{})
            
            })
        })//schedule

    })
    app.listen(3000, () =>{
        console.log('server is up on port 3000')
    })


 
