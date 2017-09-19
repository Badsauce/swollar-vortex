import axios from 'axios'

export const submitPartnerEmails = (yourEmail, theirEmail) => {
  return axios.post('/api/submitPartnerEmails/',{ yourEmail, theirEmail })
    .then(response => response.data)
}

export const getKinkList = () => {
  return axios.get('/api/kinkList/')
    .then(response => response.data)
}

export const submitKinkList = (partnerId, list, coupleId) => {
  return axios.post('/api/kinkList/',{ partnerId, list, coupleId})
    .then(response => response.data)
}

export const getMatchedList = (coupleId) => {
  return axios.get(`/api/matchedList/${coupleId}`)
    .then(response => response.data)
}
