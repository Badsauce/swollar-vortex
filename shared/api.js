import axios from 'axios'

export const submitPartnerEmails = (yourEmail, theirEmail) => {
  axios.post('/api/submitPartnerEmails/',{ yourEmail, theirEmail })
}

export const getKinkList = () => {
  return axios.get('/api/kinkList/').then(response => response.data)
}
