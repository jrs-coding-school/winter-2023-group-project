const root = (app) => {
  app.get('/', (req, res) => {
    res.json({message: 'Hello Trivia World!'})
  })
}

module.exports = root