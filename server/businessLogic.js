import * as dataLayer from './dataLayer'
import { sendWelcomeEmail } from './mailer'

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
