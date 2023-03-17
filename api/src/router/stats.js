const { getStatsByUser } = require('../controller/stats')


const stats = (app) => {

  app.get('/stats/:username', getStatsByUser)

}

module.exports = stats