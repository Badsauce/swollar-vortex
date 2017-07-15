const database = {
  couples: {},
  lists: {},
}

const listTemplate = {
  thu67: {
    question: 'Butts?',
    answer: null,
  },
  thtyu67: {
    question: 'Butts?',
    answer: null,
  },
  th89u67: {
    question: 'Butts?',
    answer: null,
  },
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

export const createList = email => {
  database.lists[email] = {...listTemplate}
}
