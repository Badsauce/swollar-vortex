import express from 'express'
import bodyParser from 'body-parser'
import * as businessLogic from './businessLogic'

const apiRouter = express.Router()

apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());

apiRouter.post('/submitPartnerEmails', (req, res) => {
  console.log(req.body)

  const {yourEmail, theirEmail} = req.body

  businessLogic.enrollCouple(yourEmail, theirEmail)

  res.end('it work')
})

apiRouter.get('/kinkList', (req, res) => {
  const kinkList = businessLogic.getKinkList()
  console.log('get kink list', kinkList)
  res.json(kinkList)
})

export default apiRouter
