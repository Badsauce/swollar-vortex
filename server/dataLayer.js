const database = {
  couples: {
    domingo: ['sean','craig']
  },
  lists: {
    craig: [],
  },
  kinkList: [
    { id: 1, name: 'Anal Beads', selected: '', onWho: '' },
    { id: 2, name: 'Sexy Photoshoot', selected: '', onWho: '' },
    { id: 3, name: 'Discretely masturbate partner in public', selected: '', onWho: '' },
    { id: 4, name: 'Butt Plug', selected: '', onWho: '' },
    { id: 5, name: 'Cosplay', selected: '', onWho: '' },
    { id: 6, name: 'Cum/Squirt on face', selected: '', onWho: '' },
    { id: 7, name: 'Cum/Squirt on body', selected: '', onWho: '' },
    { id: 8, name: 'Dildo', selected: '', onWho: '' },
    { id: 9, name: 'Strip Tease', selected: '', onWho: '' },
    { id: 10, name: 'Dress up as furries', selected: '', onWho: '' },
    { id: 11, name: 'Electro-play', selected: '', onWho: '' },
    { id: 12, name: 'Film partner masturbating', selected: '', onWho: '' },
    { id: 13, name: 'Foot sex', selected: '', onWho: '' },
    { id: 14, name: 'Get a brazilian', selected: '', onWho: '' },
    { id: 15, name: 'Ice play', selected: '', onWho: '' },
    { id: 16, name: 'Get shaved/trimmed by partner', selected: '', onWho: '' },
    { id: 17, name: 'Oral while blindfolded', selected: '', onWho: '' },
    { id: 18, name: 'Lap Dance', selected: '', onWho: '' },
    { id: 19, name: 'Anal fingering', selected: '', onWho: '' },
    { id: 20, name: 'Anal fisting', selected: '', onWho: '' },
    { id: 21, name: 'Anal sex', selected: '', onWho: '' },
    { id: 22, name: 'Anal licking', selected: '', onWho: '' },
  ]
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
  database.couples[uniqueCode] = {[email1]: false, [email2]: false}
}

export const retrieveCouple = uniqueCode => {
  return database.couples[uniqueCode]
}

export const createList = email => {
  database.lists[email] = {...listTemplate}
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
