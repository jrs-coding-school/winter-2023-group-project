import React from "react"
import { Grid } from "@mui/material"
import QuickPlayLeaderboard from "./QuickPlayLeaderboard"
import './index.css'

function Leaderboard (props) {
  return (
  <Grid>
    <h1 className="pageHeader">
      Leaderboards
    </h1>
    <Grid item xs sx={{
      display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <QuickPlayLeaderboard/>
    </Grid>
  </Grid>
  )
}

export default Leaderboard
