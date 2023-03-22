import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Timer(props) {

  const {
    duration,
    checkAnswer,
    question
  } = props

  const [progress, setProgress] = useState(100);
  
  useEffect(()=> {
    if(question) {
      setProgress(100)
    }
  }, [question])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 0) {
          checkAnswer('incorrect');
          return null
        }
        const diff = 100/duration;
        return Math.min(oldProgress - diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}