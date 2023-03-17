import './App.css'
import {Routes, Route} from 'react-router-dom'
import About from './views/About'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Layout from './layouts'
import Leaderboard from './views/Leaderboard'
import ThemeContextProvider from './context/themeContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/leaderboard" element={<Leaderboard/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
