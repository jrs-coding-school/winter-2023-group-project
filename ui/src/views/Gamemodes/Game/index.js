import {Fragment} from 'react'
import {useEffect, useState} from 'react'
import {getQuestion} from '../../../utility/api.js'
import Question from './Question.js'


  // create an object to track question results
  const results = {
    gameMode: undefined,
    score: 0,
    duration: 0,
    responses: []    
  }
    // responses expected shape: [{
    //   question_id: undefined,
    //   isCorrect: undefined
    // }]

function Game(props) {
  
 // get difficulty, category and game mode from props
  const {
    difficulty,
    mode,
    category
  } = props

  // define the gameMode
  if (!results.gameMode) {
    results.gameMode = mode
  }
  // console.log('props: ', props )
  

  // define state variables
  const [question, setQuestion] = useState(false)
  const [highlight, setHighlight] = useState(false)

  // write a function to get game rules based on mode
    // quick play
      // if timer === 0 end the game
    // 3 strikes
      // if a strikes === 3 end the game
    // fast 25
      // if responses.length === 25 end the game

  // fetch questions from the API using: game mode, difficulty, category
  useEffect( () => {
    if (!question) {
      getQuestion(difficulty, category)
      .then((data) => { setQuestion(data) })
      .catch((error) => { console.log(error) })
    }
   }, [difficulty, category, question])
  
  // write a function to move to next question
  const getNextQuestion = (response) => {
    console.log('getting next Question!')
    // adds result to tracker
    results.responses.push(response)
    console.log("results: ", results)
    // reset highlight
    setHighlight(false)
    // get next question
    setQuestion(false)
  }

  // write a function for when the question timer is up
    // highlights the correct answer regardless if answered. 
    // move to next question

  // write a function that checks if a selected answer is correct. 
  const checkAnswer = (selectedAnswer) => {
    
    // highlight correct answer green if correct
    // if the question is incorrect highlight incorrect red
    // by changing highlight we can affect the question component by passing in the state variable as a prop
    setHighlight(true)

    // add a delay before getting next question
    setTimeout(() => {
      console.log("Delayed for 1.5 second.");
      return getNextQuestion({
        question_id: question.question_id,
        isCorrect: selectedAnswer === 'correct'
      })
    }, 1500);
  }

  // write a function that gives a result of gameplay through a results popup.
    // fetch request to send results to api
    // give options for play again, or leaderboard
      // if play again, write a function to reset the game
      // leaderboard, redirect to /leaderboard

  return (
    <Fragment>
      <div>gameplay</div>
      {/* Create a timer component (based on game mode) that controls the duration of each question */}
      {/* Create a component to display question and 4 selectable answers */}
      <Question
        question={question}
        checkAnswer={checkAnswer}
        highlight={highlight}
      />
    </Fragment>
  )
}

export default Game