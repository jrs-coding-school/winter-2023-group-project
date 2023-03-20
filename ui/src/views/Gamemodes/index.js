import React from 'react'
import { Fragment } from 'react'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import './index.css'

function Gamemodes() {

  const [mode, setMode] = useState(null)
  const [category, setCategory] = useState(null)
  const [difficulty, setDifficulty] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')

  const handleStart = () => {
    if (difficulty === null){
      setErrorMsg("Please select your difficulty before starting.")
    }
    if (category === null){
      setErrorMsg("Please select your category before starting.")
    }
    if (mode === null) {
      setErrorMsg('Please select your mode before starting.')
    }

    setErrorMsg('')
    
    console.log(`GAME TYPE: mode: ${mode}, category: ${category}, difficulty: ${difficulty}`)
  }

  return (
    <Fragment>
      <Box className='container'>

        <Typography variant='h4' fontWeight='bold' align='center' mt='20px'>
          GAME MODES
        </Typography>

        <Box className='modes-buttons-container' pt='15px'>
        
          <Button variant='contained' onClick={() => setMode('quick play')} color={mode === 'quick play' ? "success" : "primary"}>
            <Typography className='button-text'>
              Quick Play
            </Typography>
          </Button>

          <Button variant='contained' onClick={() => setMode('3 strikes')} color={mode === '3 strikes' ? "success" : "primary"}>
            <Typography className='button-text'>
              3 Strikes
            </Typography>
          </Button>

          <Button variant='contained' onClick={() => setMode('fast 25')} color={mode === 'fast 25' ? "success" : "primary"}>
            <Typography className='button-text'>
              Fast 25
            </Typography>
          </Button>
        
        </Box>

        <Typography variant='h4' fontWeight='bold' align='center' mt='50px'>
          CHOOSE YOUR CATEGORY
        </Typography>

        <Box className='category-buttons-container' pt='20px'>
        
          <Button variant='contained' onClick={() => setCategory('arts & literature')} color={category === 'arts & literature' ? "success" : "primary"}>
            <Typography className='button-text'>
              Arts & Literature
            </Typography>
          </Button>

          <Button variant='contained'  onClick={() => setCategory('film & tv')} color={category === 'film & tv' ? "success" : "primary"}>
            <Typography className='button-text'>
              Film & TV
            </Typography>
          </Button>

          <Button variant='contained' onClick={() => setCategory('food & drink')} color={category === 'food & drink' ? "success" : "primary"}>
            <Typography className='button-text'>
              Food & Drink
            </Typography>
          </Button>

          <Button variant='contained' onClick={() => setCategory('general knowledge')} color={category === 'general knowledge' ? "success" : "primary"}>
            <Typography className='button-text'>
              General Knowledge
            </Typography>
          </Button>

          <Button variant='contained' onClick={() => setCategory('geography')} color={category === 'geography' ? "success" : "primary"}>
            <Typography className='button-text'>
              Geography
            </Typography>
          </Button>

          <Button variant='contained' onClick={() => setCategory('history')} color={category === 'history' ? "success" : "primary"}>
            <Typography className='button-text'>
              History
            </Typography>
          </Button>

          <Button variant='contained' onClick={() => setCategory('music')} color={category === 'music' ? "success" : "primary"}>
            <Typography className='button-text'>
              Music
            </Typography>
          </Button>

          <Button variant='contained' onClick={() => setCategory('science')} color={category === 'science' ? "success" : "primary"}>
            <Typography className='button-text'>
              Science
            </Typography>
          </Button>

          <Button variant='contained' onClick={() => setCategory('society & culture')} color={category === 'society & culture' ? "success" : "primary"}>
            <Typography className='button-text'>
              Society & Culture
            </Typography>
          </Button>

          <Button variant='contained' onClick={() => setCategory('sport & leisure')} color={category === 'sport & leisure' ? "success" : "primary"}>
            <Typography className='button-text'>
              Sport & Leisure
            </Typography>
          </Button>

        </Box>

        <Typography variant='h4' fontWeight='bold' align='center' mt='50px'>
          CHOOSE YOUR DIFFICULTY
        </Typography>

        <Box className='difficulty-buttons-container' pt='20px'>
        
          <Button variant='contained' onClick={() => setDifficulty('easy')} color={difficulty === 'easy' ? "success" : "primary"}>
            <Typography className='button-text'>
              EASY
            </Typography>
          </Button>

          <Button variant='contained' onClick={() => setDifficulty('medium')} color={difficulty === 'medium' ? "success" : "primary"}>
            <Typography className='button-text'>
              MEDIUM
            </Typography>
          </Button>

          <Button variant='contained' onClick={() => setDifficulty('hard')} color={difficulty === 'hard' ? "success" : "primary"}>
            <Typography className='button-text'>
              HARD
            </Typography>
          </Button>
        
        </Box>

        <Box align='center' mt='40px'>

        <Typography color='red' fontSize='18px' mb='15px'>
          {errorMsg}
        </Typography>

          <Button 
            variant='contained' 
            color='secondary'
            onClick={handleStart}
          >
            <Typography fontWeight='bold' fontSize='35px'>
              start game
            </Typography>
         </Button>
        </Box>

      </Box>
    </Fragment>
  )
}

export default Gamemodes