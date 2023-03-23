import { Fragment } from 'react';
import GameHistoryCard from './GameHistoryCard';
import { getGameHistory } from "../../utility/api";
import { useState, useEffect } from "react";

function GameHistoryContainer( props ) {
  
  const {username, gameMode} = props

  const [data, setData] = useState(null)

  let filteredData = []

  //query db for games by username and map through the result object and populate game history card
  useEffect(() => {
    getGameHistory(username)
      .then(data => setData(data))
      .catch((error) => console.log(error))
  }, [username])
  
  if (!data) {
    return <>Loading...</>
  }
  
  switch(gameMode) {
    case 'All Modes':
      filteredData = data
      break
    case "Quick Play":
      filteredData = data.filter(element => element.gameMode === gameMode)
      break
    case "3 Strikes":
      filteredData = data.filter(element => element.gameMode === gameMode)
      break
    case "Fast 25":
      filteredData = data.filter(element => element.gameMode === gameMode)
      break
    default:
  }

  return (

    <Fragment>
       {filteredData.map((element) => {
        return (
          <div >
            <GameHistoryCard
              gameDate={element.gameDate}
              duration={element.duration}
              score={element.score}
              difficulty={element.difficulty}
              gameMode={element.gameMode}
            />
          </div>
          )
          })}
    </Fragment>
  )
}
export default GameHistoryContainer