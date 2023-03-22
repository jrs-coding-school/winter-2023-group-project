import { Fragment, useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { shuffle } from '../../../utility/utils';
import Timer from './Timer';

function Question(props) {

  // pass questions in as props
  const { 
    question,
    checkAnswer,
    highlight
   } = props
  //  console.log("highlight: ", highlight)

  const [shuffledAnswers, setShuffledAnswers] = useState(null)

  const handleClick = (selected) => {
    // console.log(selected)
    checkAnswer(selected)
  }

  useEffect(() => {
    const answers = [
      {key: 'correct', value: question.correctAnswer}, 
      {key: 'incorrect 1', value: question.incorrectAnswer1}, 
      {key: 'incorrect 2', value: question.incorrectAnswer2}, 
      {key: 'incorrect 3', value: question.incorrectAnswer3}]

      setShuffledAnswers(shuffle(answers))

  }, [question])

  if(!shuffledAnswers) {
    return <div>Shuffling...</div>
  }
  // console.log(shuffledAnswers)
  return (
    
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >

    {/* question component
      Create a card with the text of the trivia question 
    */}
      <Grid item>
        <Card sx={{ width: 275, background: 'grey' }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {question.question}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    {/* Display timer */}
    <Grid item sx={{width: 500}}>
      <Timer
      duration={5}
      checkAnswer={checkAnswer}
      question={question}
      />
    </Grid>
    {/* 4 clickable answer components 
      make a grid to equally space answers
      make a button for each answer with the text of the answer
      if the user selects the correct answer, highlight green
    */}
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          {shuffledAnswers.map((answer) => {
            return (
              <Grid key={answer.key} item container direction="column" alignItems="center" justifyContent="center" xs={5}>
                <Button variant="contained" color={ highlight ? answer.key === 'correct' ? "success" : "error" : "primary"} onClick={() => handleClick(answer.key)}>{answer.value}</Button>
              </Grid>
              )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Question
