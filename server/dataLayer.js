export const database = {
  couples: {
    bootit: {
      partner1: { id: 'boo', email: 'booty', submittedList: false },
      partner2: { id: 'tit', email: 'titty', submittedList: false },
    }
  },
  lists: {
    craig: [
      { id: 1, name: 'Anal Beads', selected: 'yes', onWho: '' },
    ],
  },
  kinkList: [
    { id: 1, name: 'Anal Beads', selected: '', onWho: '' },
    { id: 2, name: 'Sexy Photoshoot', selected: '', onWho: '' },
    { id: 3, name: 'Discretely masturbate partner in public', selected: '', onWho: '' },
    { id: 4, name: 'Butt Plug', selected: '', onWho: '' },
    { id: 5, name: 'Cosplay', selected: '', onWho: '' },
  ]
}

export const debugDatabase = () => {
  console.log(database)
}

const createPartner = email => ({ email, submittedList: false, id: email.substring(0, 3) })
const modifyCouple = (coupleId, newValue) => database.couples[coupleId] = newValue

export const addCouple = (coupleId, email1, email2) => {
  database.couples[coupleId] = {
    partner1: createPartner(email1),
    partner2: createPartner(email2),
  }
}

export const retrieveCouple = uniqueCode => database.couples[uniqueCode]


export const markSubmitted = (partnerId, coupleId) => {
  const couple = retrieveCouple(coupleId)
  const newCouple = {...couple}

  if(couple.partner1.id === partnerId) {
    newCouple.partner1.submittedList = true
  } else {
    newCouple.partner2.submittedList = true
  }

  modifyCouple(coupleId, newCouple)
}

export const saveKinkList = (id, list) => {
  database.lists[id] = list
}

export const findList = email => {
  return database.lists[email]
}

export const getKinkList = () => {
  return database.kinkList
}
