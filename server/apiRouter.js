import express from 'express'
import bodyParser from 'body-parser'

const apiRouter = express.Router()

apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());

apiRouter.post('/submitPartnerEmails', (req, res) => {
  console.log(req.body)
  res.end('it work')
})

export default apiRouter
