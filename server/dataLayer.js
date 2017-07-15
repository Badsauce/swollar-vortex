const database = {
  couples: {},
  lists: {},
}

export const debugDatabase = () => {
  console.log(database)
}

export const addCouple = (uniqueCode, email1, email2) => {
  database.couples[uniqueCode] = [ email1, email2 ]
}

export const retrieveCouple = uniqueCode => {
  return couples[uniqueCode]
}
