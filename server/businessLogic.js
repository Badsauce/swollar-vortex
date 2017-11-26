import * as dataLayer from './dataLayer'
import { sendWelcomeEmail, sendMatchedList } from './mailer'

export const enrollCouple = (email1, email2) => {
  const partnerId1 = email1.substring(0, 3)
  const partnerId2 = email2.substring(0, 3)
  const coupleId = `${partnerId1}${partnerId2}`

  dataLayer.addCouple(coupleId, email1, email2)

  sendWelcomeEmail(email1, coupleId)
  sendWelcomeEmail(email2, coupleId)

  return {
    coupleId,
    partnerId1,
    partnerId2,
  }
}

export const getKinkList = () => dataLayer.getKinkList()

export const computeMatches = (coupleId) => {
  const coupleData = dataLayer.retrieveCouple(coupleId)
  console.log({coupleData})
  if(coupleData.partner1.submittedList && coupleData.partner2.submittedList) {
    const {list1, list2} = dataLayer.getListsForCouple(coupleId)

    return list1.map((listItem1, index) => {
      const listItem2 = list2[index]
      let matchedSelected = 'yes'

      if(listItem1.selected === 'no' || listItem2.selected === 'no'){
        return null
      } else if(listItem1.selected === 'maybe' || listItem2.selected === 'maybe'){
        matchedSelected = 'maybe'
      }
      return {name: listItem1.name, selected: matchedSelected}
    }).filter(listItem => listItem !== null)
    // sendMatchedList(partnerId, otherPartnerId, matchedList)
  } else {
    return [
      {
        name: 'waiting for partner to submit',
        selected: 'yes',
      },
    ]
  }
}

export const saveKinkList = (partnerId, list, coupleId) => {
  dataLayer.saveKinkList(partnerId, list)
  dataLayer.markSubmitted(partnerId, coupleId)
}
