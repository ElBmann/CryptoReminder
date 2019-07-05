const crypto = require('./src/utils/cryptoCompare')
const sendEmail = require('./src/emails/account')
/* TODO: 
    1. Add Email/Text Function [✔]
    2. Call a buy order at a certain price
    3. Move to Ledger
    4. Move money from ledger to exchange
    4. exchange to bank 
    */

    crypto((cryptoCurrency)=>{
        console.log(cryptoCurrency.cryptoCompare.XRP.USD)
        const XRP_USD = cryptoCurrency.cryptoCompare.XRP.USD;
        const ETH_USD = cryptoCurrency.cryptoCompare.ETH.USD;
        const LINK_USD = cryptoCurrency.cryptoCompare.LINK.USD;
        sendEmail((emailStats)=>{ console.log(emailStats)})
        console.log(LINK_USD)
        if(XRP_USD >= 1.00 || ETH_USD >=500 || LINK_USD <= 3.00){
            sendEmail((emailStats)=>{ console.log(emailStats)})
            //send test and or email
            console.log('XRP: '+XRP_USD+'\n'+ 'ETH: '+ ETH_USD )
        }
})
