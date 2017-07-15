import { debugDatabase, addCouple } from './dataLayer'

export const enrollCouple = (email1, email2) => {
  const uniqueCode = `${email1}${email2}`

  addCouple(uniqueCode, email1, email2)

  debugDatabase()
}
