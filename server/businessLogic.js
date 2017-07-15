import { debugDatabase, addCouple, createList } from './dataLayer'

export const enrollCouple = (email1, email2) => {
  const uniqueCode = `${email1}${email2}`

  addCouple(uniqueCode, email1, email2)

  createList(email1)
  createList(email2)

  debugDatabase()
}
