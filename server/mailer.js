import sgMail from '@sendgrid/mail'
import { generate as generateWelcomeEmail } from './emailTemplates/welcomeEmail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendWelcomeEmail = (email, coupleId) => {
  const msg = {
    to: 'nickrutowski@gmail.com',
    from: 'kinkmailer@gmail.com',
    subject: 'Welcome to KinkAF',
    html: generateWelcomeEmail(email.substring(0, 3), coupleId),
  };

  sgMail.send(msg);
}

export const sendMatchedList = (partnerId, otherPartnerId, matchedList) => {
  console.log('mailing matches')
}
