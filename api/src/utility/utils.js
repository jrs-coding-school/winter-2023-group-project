export const utilityJSON = () => {

  const data = require('../assets/questions.json')

  let newArray = data.map(element => {
    
    let properties = {
      "question_id": element.id,
      "question": element.question,
      "difficulty": element.difficulty,
      "category": element.category,
      "correctAnswer": element.correctAnswer,
      "incorrectAnswer1": element.incorrectAnswers[0],
      "incorrectAnswer2": element.incorrectAnswers[1],
      "incorrectAnswer3": element.incorrectAnswers[2]
    }
    return properties
   })
   
  //  console.log(newArray)
}