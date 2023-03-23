import React from 'react'
import { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import './index.css'
import Game from './Game'
import { isUserLoggedIn } from '../../utility/utils'

function Gamemodes() {

  const [mode, setMode] = useState(null)
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)


  const navigate = useNavigate()

  useEffect(() => {
    if(!isUserLoggedIn()) {
      navigate('/login')
    }

  }, [])


  const handleStart = () => {
    
    if (!mode) {
      return setErrorMsg('Please select your game mode before starting.')
    }

    // if (!category) {
    //   return setErrorMsg("Please select your category before starting.")
    // }

    // if (!difficulty) {
    //   return setErrorMsg("Please select your difficulty before starting.")
    // }
    
    // console.log(`mode: ${mode}`)
    // console.log(`category: ${category}`)
    // console.log(`difficulty: ${difficulty}`)

    setIsPlaying(true)
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
      setCategory('')
    }
  }

  const handleSelectDifficulty = (selected) => {
    setDifficulty(selected)

    if (difficulty === selected) {
      setDifficulty('')
    }
  }
  
  if (isPlaying) {
    return (
      <Game 
        mode={mode} 
        category={category} 
        difficulty={difficulty}
      />
    )
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
              <Button variant='contained' onClick={() => handleSelectMode('Quick Play')} color={mode === 'Quick Play' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Quick Play
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button disabled variant='contained' onClick={() => handleSelectMode('3 Strikes')} color={mode === '3 Strikes' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  3 Strikes
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button disabled variant='contained' onClick={() => handleSelectMode('Fast 25')} color={mode === 'Fast 25' ? "success" : "primary"}>
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
              <Button variant='contained' onClick={() => handleSelectCategory('Arts & Literature')} color={category === 'Arts & Literature' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Arts & Literature
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('Film & TV')} color={category === 'Film & TV' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Film & TV
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('Food & Drink')} color={category === 'Food & Drink' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Food & Drink
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('General Knowledge')} color={category === 'General Knowledge' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  General Knowledge
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('Geography')} color={category === 'Geography' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Geography
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('History')} color={category === 'History' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  History
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('Music')} color={category === 'Music' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Music
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('Science')} color={category === 'Science' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Science
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('Society & Culture')} color={category === 'Society & Culture' ? "success" : "primary"}>
                <Typography fontWeight='bold'>
                  Society & Culture
                </Typography>
              </Button>
            </Grid>
            <Grid item >
              <Button variant='contained' onClick={() => handleSelectCategory('Sport & Leisure')} color={category === 'Sport & Leisure' ? "success" : "primary"}>
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