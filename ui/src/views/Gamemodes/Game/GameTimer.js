import {useState, useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function CircularProgressWithLabel(props) {

  const {
    value,
    duration
  } = props

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(value*duration)/100}s`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function GameTimer(props) {

  const {
    duration,
    endGame
  } = props 

  const [progress, setProgress] = useState(100)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        // console.log(oldProgress)
        if (oldProgress <= 0) {
           endGame()
          return 0
        }
        const diff = (100/duration);
        return Math.min(oldProgress - diff, 100);
      });
    }, 1000);
  
    return () => {
      clearInterval(timer);
    };
  }, []);

  if (duration === Infinity) {
    return null
  }
  return (
    <Box sx={{ width: '100%' }}>
      <CircularProgressWithLabel value={progress} duration={duration} />
    </Box>
  );
}