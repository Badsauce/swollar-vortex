import * as dataLayer from './dataLayer'
import { sendWelcomeEmail, sendMatchedList } from './mailer'

export const enrollCouple = (email1, email2) => {
  const partnerId1 = email1.substring(0, 3)
  const partnerId2 = email2.substring(0, 3)
  const coupleId = `${partnerId1}${partnerId2}`

  dataLayer.addCouple(coupleId, email1, email2)

  // sendWelcomeEmail()

  return {
    coupleId,
    partnerId1,
    partnerId2,
  }
}

export const getKinkList = () => dataLayer.getKinkList()

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
  console.log('before',dataLayer.database.couples[coupleId])
  dataLayer.saveKinkList(partnerId, list)
  dataLayer.markSubmitted(partnerId, coupleId)
  console.log('after',dataLayer.database.couples[coupleId])

  const coupleData = dataLayer.retrieveCouple(coupleId)
  console.log({coupleData})
  if(coupleData.partner1.submittedList && coupleData.partner2.submittedList) {
    console.log('time to compute lists')
    // const lists = dataLayer.getListsForCouple(coupleId)
    // const matchedList = computeMatches(lists)
    // sendMatchedList(partnerId, otherPartnerId, matchedList)
  } else {
    console.log('waiting for partner to submit')
  }
}
