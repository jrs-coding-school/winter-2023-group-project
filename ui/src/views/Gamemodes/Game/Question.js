import { Fragment, useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
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
  const [progress, setProgress] = useState(100)

  const pauseTimer = () => {
    setProgress(0)
  }

  const handleClick = (selected) => {
    // console.log(selected)
    checkAnswer(selected)
    pauseTimer()
  }

  useEffect(() => {
    console.log(question)
    if (!question) {
      return
    }
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
        <Card sx={{ 
          width: '700px', 
          background: '#D3D3D3', 
          height: '150px', 
          ml:'50px', mr: '50px', mt: '20px', 
          boxShadow:'3px 2px 7px rgb(0, 0, 0, 0.5)',
          }}>
          
          <CardContent>
            <Typography 
              sx={{ fontSize: 22 }} 
              align='center'
            >
              {question.question}
            </Typography>
          
          </CardContent>
        </Card>
      </Grid>
    
    {/* question timer */}
    <Grid item>
      <Timer
      duration={10}
      checkAnswer={checkAnswer}
      question={question}
      shuffledAnswers={shuffledAnswers}
      progress={progress}
      setProgress={setProgress}
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
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {shuffledAnswers.map((answer) => {
            return (
              <Grid container item 
                key={answer.key} 
                direction="column" 
                alignItems="center" 
                justifyContent="center" 
                xs={5}>
                <Button 
                  variant="contained" 
                  color={ highlight ? answer.key === 'correct' ? "success" : "error" : "primary"} 
                  onClick={() => handleClick(answer.key)}
                  style={{maxWidth: '350px', maxHeight: '150px', minWidth: '350px', minHeight: '75px', fontWeight: 'bold', fontSize:'16px'}}>
                    {answer.value}
                </Button>
              </Grid>
              )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Question
