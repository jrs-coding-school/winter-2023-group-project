import React from 'react'
import { Fragment } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import './index.css'

function Gamemodes() {

  const [mode, setMode] = useState(null)
  const [category, setCategory] = useState(null)
  const [difficulty, setDifficulty] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')

  const handleStart = () => {
    
    if (mode === null) {
      return setErrorMsg('Please select your game mode before starting.')
    }

    if (category === null) {
      return setErrorMsg("Please select your category before starting.")
    }

    if (difficulty === null) {
      return setErrorMsg("Please select your difficulty before starting.")
    }
    
    // console.log(`mode: ${mode}`)
    // console.log(`category: ${category}`)
    // console.log(`difficulty: ${difficulty}`)

    // INSERT GAME COMPONENT HERE
  }

  const handleSelectMode = (selected) => {
    setMode(selected)

    if (mode === selected) {
      setMode(null)
    }
  }

  const handleSelectCategory = (selected) => {
    setCategory(selected)

    if (category === selected) {
      setCategory(null)
    }
  }

  const handleSelectDifficulty = (selected) => {
    setDifficulty(selected)

    if (difficulty === selected) {
      setDifficulty(null)
    }
  }

  return (
    <Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >

        <Grid item mt='20px'>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant='h4' fontWeight='bold' align='center'>
              GAME MODES
            </Typography>
            
            <Typography component={Link} to='/how-to-play' color='grey' className='link' mb='8px'>
              Rules
            </Typography>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            rowSpacing={2}
            columnSpacing={2}
            style={{maxWidth: '900px'}}
          >
            <Grid item>
              <Button variant='contained' onClick={() => handleSelectMode('quick-play')} color={mode === 'quick-play' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Quick Play
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' onClick={() => handleSelectMode('3-strikes')} color={mode === '3-strikes' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  3 Strikes
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' onClick={() => handleSelectMode('fast-25')} color={mode === 'fast-25' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Fast 25
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant='h4' fontWeight='bold' align='center' mt='40px' mb='8px'>
            CHOOSE YOUR CATEGORY
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            rowSpacing={2}
            columnSpacing={2}
            style={{maxWidth: '950px'}}
          >
            <Grid item>
              <Button variant='contained' onClick={() => handleSelectCategory('art')} color={category === 'art' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Arts & Literature
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('film')} color={category === 'film' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Film & TV
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('food')} color={category === 'food' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Food & Drink
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('gen-knowledge')} color={category === 'gen-knowledge' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  General Knowledge
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('geography')} color={category === 'geography' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Geography
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('history')} color={category === 'history' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  History
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('music')} color={category === 'music' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Music
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('science')} color={category === 'science' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Science
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('society')} color={category === 'society' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Society & Culture
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('sport')} color={category === 'sport' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Sport & Leisure
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant='h4' fontWeight='bold' align='center' mt='40px' mb='8px'>
            CHOOSE YOUR DIFFICULTY
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            rowSpacing={2}
            columnSpacing={2}
            style={{maxWidth: '900px'}}
          >

            <Grid item>
              <Button variant='contained' onClick={() => handleSelectDifficulty('easy')} color={difficulty === 'easy' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  EASY
                </Typography>
              </Button>
            </Grid>

            <Grid item>
            <Button variant='contained' onClick={() => handleSelectDifficulty('medium')} color={difficulty === 'medium' ? "success" : "primary"}>
              <Typography fontWeight='bold'>
                MEDIUM
              </Typography>
            </Button>
            </Grid>

            <Grid item>
            <Button variant='contained' onClick={() => handleSelectDifficulty('hard')} color={difficulty === 'hard' ? "success" : "primary"}>
              <Typography fontWeight='bold'>
                HARD
              </Typography>
            </Button>
            </Grid>

          </Grid>

        </Grid>

        <Grid align='center' mt='40px'>

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

        </Grid>

      </Grid>
    </Fragment>
  )
}

export default Gamemodes