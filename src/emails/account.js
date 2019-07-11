const nodemailer = require("nodemailer")
const crypto = require('../utils/cryptoCompare')
require('dotenv').config()

const account = () =>{

 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: 'true',
    auth: {
      user: process.env.NODEMAILER_EMAIL, // generated ethereal user
      pass: process.env.NODEMAILER_PASSWORD // generated ethereal password
    }
  })

  crypto((cryptoCurrency)=>{

    const XRP_USD = cryptoCurrency.cryptoCompare.XRP.USD
    const ETH_USD = cryptoCurrency.cryptoCompare.ETH.USD
    const LINK_USD = cryptoCurrency.cryptoCompare.LINK.USD
    const MIOTA_USD = cryptoCurrency.cryptoCompare.MIOTA.USD

    console.log('MIOTA_USD:  ' + MIOTA_USD)


    if(XRP_USD >= 1.00 || ETH_USD >= 500){

      var mailOptions ={
       from: process.env.NODEMAILER_EMAIL,
       to:'recub35@gmail.com',
       subject:'Shit Is Moving Bro 💪💪', // Subject line
       text: 'XRP/USD: '+ XRP_USD + '\n' +
             'ETH/USD: ' + ETH_USD
      }
    }else if(LINK_USD <= 3.00){
      var mailOptions ={
        from: process.env.NODEMAILER_EMAIL,
        to:'recub35@gmail.com',
        subject:'Link Token Has Dropped 💪💪', // Subject line
        text:'You may want to buy \n'+'LINK/USD: ' + LINK_USD // plain text body
      }
    }

transporter.sendMail(mailOptions, function(err, data){
  if(err){

    console.log('unable to send email' + err)
    console.log('mailOptions' + mailOptions)
    //callback(false, undefined)
  }else{
   
    //callback(true, undefined)
   console.log('email sent')
  }
})

  })

}

module.exports = account