const nodemailer = require("nodemailer")
const crypto = require('../utils/cryptoCompare')
require('dotenv').config()

const account = (callBack) =>{

 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: 'true',
    auth: {
      user: process.env.NODEMAILER_EMAIL, // generated ethereal user
      pass: process.env.NODEMAILER_PASSWORD // generated ethereal password
    }
  });
  crypto((cryptoCurrency)=>{

    const XRP_USD = cryptoCurrency.cryptoCompare.XRP.USD;
    const ETH_USD = cryptoCurrency.cryptoCompare.ETH.USD;
    const LINK_USD = cryptoCurrency.cryptoCompare.LINK.USD;

  let mailOptions ={
    from: process.env.NODEMAILER_EMAIL,
    to:'recub35@gmail.com',
    subject:'Shit Is Moving Bro 💪💪', // Subject line
    text: 'XRP/USD: '+ XRP_USD + '\n' +
          'ETH/USD: ' + ETH_USD + '\n' + 
          'LINK/USD: ' + LINK_USD // plain text body
};

transporter.sendMail(mailOptions, function(err, data){
  if(err){
    callback('unable to send email', undefined)
  }else{
    callback('Email Sent', undefined)
  }
});

  })

}



module.exports = account