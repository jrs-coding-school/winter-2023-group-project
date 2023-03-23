import { useEffect } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Timer(props) {

  const {
    duration,
    checkAnswer,
    shuffledAnswers,
    progress,
    setProgress
  } = props 
  
  useEffect(()=> {
    setProgress(100)
  }, [shuffledAnswers])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        // console.log(oldProgress)
        if (oldProgress <= 0) {
          checkAnswer('incorrect');
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

  return (
    <Box>
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        color='secondary' 
        sx={{ height: '10px',  width: '500px', textAlign: 'center' }}/>
    </Box>
  );
}