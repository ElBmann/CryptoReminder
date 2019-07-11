const sendEmail = require('./src/emails/account')
let schedule = require('node-schedule')
const express = require('express')

/* TODO: 
    1. Add Email/Text Function [✔]
    2. create scheduler [✔]
    3. upload to web server [✔]
    4. Call a buy order at a certain price
    5. Move to Ledger
    6. Move money from ledger to exchange
    7. exchange to bank 
    */

    const app = express()
    const port = process.env.PORT || 3000

    app.get('',(req, res)=>{

        res.send('Hello There')

        var rule = new schedule.RecurrenceRule();
        rule.dayOfWeek = [0, new schedule.Range(1, 6)]
        //9AM, 12PM, 4PM, 9PM
        rule.hour =  [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]; 
        rule.minute = 00;
         
        var j = schedule.scheduleJob(rule, ()=>{

                sendEmail(()=>{})
            
        })//schedule

    })
    app.listen(port, () =>{
        console.log('server is up on port '+ port)
    })


 
