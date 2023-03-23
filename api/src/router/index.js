// import routes
const root = require('./root')
const auth = require('./auth')
const user = require('./user')
const games = require('./games')
const stats = require('./stats')
const questions = require('./questions')


const router = (app) => {

  root(app)
  auth(app)
  user(app)
  games(app)
  stats(app)
  questions(app)

}

module.exports = router