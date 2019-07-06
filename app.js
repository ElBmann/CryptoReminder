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

        res.send('Hello There')

        var rule = new schedule.RecurrenceRule();
        rule.dayOfWeek = [0, new schedule.Range(1, 6)]
        rule.hour =  [9,12,16,21]; 
        rule.minute = 00;
         
        var j = schedule.scheduleJob(rule, ()=>{

                sendEmail(()=>{})
            
        })//schedule

    })
    app.listen(3000, () =>{
        console.log('server is up on port 3000')
    })


 
