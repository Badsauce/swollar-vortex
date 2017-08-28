import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD,
    }
})

export const sendWelcomeEmail = (email) => {
  const mailOptions = {
    from: 'kinkmailer@gmail.com', // sender address
    to: 'nickrutowski@gmail.com', // list of receivers
    subject: 'Email Example', // Subject line
    text: 'kinky timez' //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        console.log(error)
    }else{
        console.log('Message sent: ' + info.response)
    }
  })
}

export const sendMatchedList = (partnerId, otherPartnerId, matchedList) => {
  console.log('mailing matches')
}
