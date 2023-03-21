// import routes
const root = require('./root')
const auth = require('./auth')
const user = require('./user')
const games = require('./games')
const stats = require('./stats')

const router = (app) => {

  root(app)
  auth(app)
  user(app)
  games(app)
  stats(app)

}

module.exports = router