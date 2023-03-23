const { showRandomQuestion } = require('../service/questions')

exports.getRandomQuestion = async (req, res) => {

  console.log(req.query)

  const {
    difficulty,
    category
  } = req.query

  try {
   
    const question = await showRandomQuestion(difficulty, category)
    
    res.json(question)
    
  } catch (error) {

    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}