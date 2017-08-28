import * as dataLayer from './dataLayer'
import { sendWelcomeEmail, sendMatchedList } from './mailer'

export const enrollCouple = (email1, email2) => {
  const uniqueCode = `${email1}${email2}`

  dataLayer.addCouple(uniqueCode, email1, email2)

  dataLayer.createList(email1)
  dataLayer.createList(email2)

  sendWelcomeEmail()
}

export const getKinkList = () => {
  return dataLayer.getKinkList()
}

export const computeMatches = (list, partnerList) => {
  console.log('compute matches')
}

export const saveKinkList = (partnerId, list, coupleId) => {
  dataLayer.saveKinkList(partnerId, list, coupleId)

  const coupleData = dataLayer.retrieveCouple(coupleId)
  const otherPartnerId = coupleData.find(id => id !== partnerId)

  const partnerList = dataLayer.findList(otherPartnerId)

  if( partnerList ){
    const matchedList = computeMatches(list, partnerList)
    sendMatchedList(partnerId, otherPartnerId, matchedList)
  }

  console.log({partnerId, coupleId})
}
