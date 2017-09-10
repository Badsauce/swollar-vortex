const database = {
  couples: {
    domingo: ['sean','craig']
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

export const addCouple = (uniqueCode, email1, email2) => {
  database.couples[uniqueCode] = {[email1]: false, [email2]: false}
}

export const retrieveCouple = uniqueCode => {
  return database.couples[uniqueCode]
}

export const saveKinkList = (email, list) => {
  database.lists[email] = {...list}
}

export const findList = email => {
  return database.lists[email]
}

export const getKinkList = () => {
  return database.kinkList
}
