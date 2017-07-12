import axios from 'axios'

export const submitPartnerEmails = (yourEmail, theirEmail) => {
  axios.post('/api/submitPartnerEmails/',{ yourEmail, theirEmail })
  console.log(yourEmail, theirEmail)
}
