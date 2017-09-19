import * as dataLayer from './dataLayer'
import { sendWelcomeEmail, sendMatchedList } from './mailer'

export const enrollCouple = (email1, email2) => {
  const partnerId1 = email1.substring(0, 3)
  const partnerId2 = email2.substring(0, 3)
  const coupleId = `${partnerId1}${partnerId2}`

  // dataLayer.addCouple(uniqueCode, email1, email2)

  // dataLayer.createList(email1)
  // dataLayer.createList(email2)

  // sendWelcomeEmail()

  return {
    coupleId,
    partnerId1,
    partnerId2,
  }
}

export const getKinkList = () => {
  return dataLayer.getKinkList()
}

export const computeMatches = (coupleId) => {
  // const lists = database.retrieveCouple(coupleId)
  // object.keys(lists[0]).map(domatching)
  return [
    {
      name: 'implement the database layer for this endpoint(sexily)',
      selected: 'yes',
    },
    {
      name: 'butt stuff',
      selected: 'maybe',
    }
  ]
}

export const saveKinkList = (partnerId, list, coupleId) => {
  // dataLayer.saveKinkList(partnerId, list, coupleId)
  //
  // const coupleData = dataLayer.retrieveCouple(coupleId)
  // const otherPartnerId = coupleData.find(id => id !== partnerId)
  //
  // const partnerList = dataLayer.findList(otherPartnerId)
  //
  // if( partnerList ){
  //   const matchedList = computeMatches(list, partnerList)
  //   sendMatchedList(partnerId, otherPartnerId, matchedList)
  // }

  console.log({partnerId, coupleId})
}
