import express from 'express'
import bodyParser from 'body-parser'
import * as businessLogic from './businessLogic'

const apiRouter = express.Router()

apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());

apiRouter.post('/submitPartnerEmails', (req, res) => {
  console.log('POST', '/submitPartnerEmails', req.body)

  const {yourEmail, theirEmail} = req.body

  const coupleInfo = businessLogic.enrollCouple(yourEmail, theirEmail)

  const response = {
    coupleId: coupleInfo.coupleId,
    partnerId: coupleInfo.partnerId1,
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

  businessLogic.saveKinkList(partnerId, list, coupleId)

  res.json('list recieved')
})

apiRouter.get('/matchedList/:coupleId', (req, res) => {
  const computedList = businessLogic.computeMatches(req.params.coupleId)
  const response = { list: computedList }
  res.json(response)
})

export default apiRouter
