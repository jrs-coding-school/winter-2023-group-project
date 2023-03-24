import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import CardContent from "@mui/material/CardContent";
import LetsPlayButton from "../../components/LetsPlayButton"
import './index.css'

function Home(props) {
  return (

    <Fragment>

      <Grid m='50px'>

        <Grid item>
          <Typography variant="h5" fontWeight='bold'>
            About Trivia Genius
          </Typography>

          <Typography variant="body1">
            Trivia Genius is a game in which players are asked multiple choice
            questions about different topics and they have to get as many correct
            answers as possible before the timer ends.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h5" fontWeight='bold' mt='20px'>
            Benefits of playing Trivia Genius
          </Typography>

          <Typography variant="body1">
            Every year, we grow a bit older and we realize that our
            mind is not as sharp and fast as it used to be. If we don't train our
            brain, it gets harder for us to remember, concentrate and learn new
            skills and information. Quiz questions can help prevent this process
            to go so fast as it serves as a form of exercise for our brain.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h5" fontWeight='bold' mt='20px'>
            About the Game
          </Typography>

          <Typography variant="body1" fontWeight='bold' fontSize='18px' mt='3px'>
            Categories:
          </Typography>

          <Box width='400px'>

            <Grid container
              rowSpacing={1}
              columnSpacing={{ xs: 1 }}
              mt='3px'
            >

              <Grid item xs={6}>
                <ListItem sx={{ display: 'list-item' }}>
                  Arts & Literature
                </ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: 'list-item' }}>
                  Film & TV
                </ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: 'list-item' }}>
                  Food & Drink
                </ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: 'list-item' }}>
                  General Knowledge
                </ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: 'list-item' }}>
                  Geography
                </ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: 'list-item' }}>
                  History
                </ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: 'list-item' }}>
                  Music
                </ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: 'list-item' }}>
                  Science
                </ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: 'list-item' }}>
                  Society & Culture
                </ListItem>
              </Grid>

              <Grid item xs={6}>
                <ListItem sx={{ display: 'list-item' }}>
                  Sport & Leisure
                </ListItem>
              </Grid>

            </Grid>

          </Box>
          
          <Typography variant="body1" fontWeight='bold' fontSize='18px' mt='20px'>
            Game Modes:
          </Typography>

          <Box width='800px' mt='10px' ml='20px'>

            <Grid item xs={12}>
              <Typography variant="body1" fontWeight='bold' fontSize='16px' mt='3px'>
                Quick Play
              </Typography>

              <ListItem>
                Three minutes of answering trivia questions in a category of your choice.
              </ListItem>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1" fontWeight='bold' fontSize='16px' mt='3px'>
                3 Strikes
              </Typography>

              <ListItem>
                Answer as many questions as possible before you answer three incorrectly.
              </ListItem>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1" fontWeight='bold' fontSize='16px' mt='3px'>
                Fast 25
              </Typography>

              <ListItem>
                Race against the clock and answer 25 questions correctly.
              </ListItem>
            </Grid>

          </Box>

          <Typography component={Link} to='/how-to-play' variant="subtitle" color='grey' className="link">More details of each game mode</Typography>

          <Typography variant="body1" fontWeight='bold' fontSize='18px' mt='20px'>
            Difficulty settings:
          </Typography>

          <Box width='800px' mt='10px' ml='20px'>

            <Grid item xs={12}>
              <ListItem sx={{ display: 'list-item' }}>
                Easy
              </ListItem>

            </Grid>

            <Grid item xs={12}>
              <ListItem sx={{ display: 'list-item' }}>
                Medium
              </ListItem>

            </Grid>

            <Grid item xs={12}>
              <ListItem sx={{ display: 'list-item' }}>
                Hard
              </ListItem>

            </Grid>

          </Box>

        </Grid>

        <Box align='center' mb='10px'>
          <Typography variant='body1'>
            See how it works!
          </Typography>
        </Box>

        <Box align='center'>
          <Box
            component="img"
            sx={{ width: '650px', justifyContent: 'center', boxShadow: '3px 2px 7px rgb(0, 0, 0, 0.3)', borderRadius: '15px' }}
            alt='Example gameplay'
            src='/screenshot.png'
          />
        </Box>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5" mt='30px' mb="15px">
            Ready to become a Trivia Genius?
          </Typography>

          <LetsPlayButton />
        </Grid>

      </Grid>

    </Fragment>
  );
}

export default Home;
