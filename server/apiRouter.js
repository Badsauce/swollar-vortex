import express from 'express'
import bodyParser from 'body-parser'
import { enrollCouple } from './businessLogic'

const apiRouter = express.Router()

apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());

apiRouter.post('/submitPartnerEmails', (req, res) => {
  console.log(req.body)

  const {yourEmail, theirEmail} = req.body

  enrollCouple(yourEmail, theirEmail)

  res.end('it work')
})

export default apiRouter
