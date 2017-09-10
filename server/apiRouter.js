import express from 'express'
import bodyParser from 'body-parser'
import * as businessLogic from './businessLogic'

const apiRouter = express.Router()

apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());

apiRouter.post('/submitPartnerEmails', (req, res) => {
  console.log(req.body)

  const {yourEmail, theirEmail} = req.body

  // businessLogic.enrollCouple(yourEmail, theirEmail)

  const response = {
    coupleId: `${yourEmail.substring(0, 3)}${theirEmail.substring(0, 3)}`,
    partnerId: yourEmail.substring(0, 3),
  }

  res.json(response)
})

apiRouter.get('/kinkList', (req, res) => {
  const kinkList = businessLogic.getKinkList()
  console.log('get kink list', kinkList)
  res.json(kinkList)
})

apiRouter.post('/kinkList', (req, res) => {
  const {partnerId, list, coupleId} = req.body

  // businessLogic.saveKinkList(partnerId, list, coupleId)

  res.json('list recieved')
})

export default apiRouter
