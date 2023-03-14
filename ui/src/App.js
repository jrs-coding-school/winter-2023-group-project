import './App.css'
import {Routes, Route} from 'react-router-dom'
import About from './views/HowToPlay'
import Home from './views/Home'
import NotFound from './views/NotFound'
import GameMode from './views/GameMode'
import LeaderBoard from './views/LeaderBoard'
import HowToPlay from './views/HowToPlay'
import Layout from './layouts'
import ThemeContextProvider from './context/themeContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/HowToPlay" element={<HowToPlay/>}/>
            <Route path="/GameMode" element={<GameMode/>}/>
            <Route path="/LeaderBoard" element={<LeaderBoard/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
