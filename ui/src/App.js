import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Layout from './layouts'
import ThemeContextProvider from './context/themeContext'
import Login from './views/Login'
import RegisterForm from './views/Register'
import Gamemodes from './views/Gamemodes'
import Settings from './views/Settings'
import HowToPlay from './views/HowToPlay'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path="/gamemodes" element={<Gamemodes/>}/>
            <Route path="/user/settings" element={<Settings/>}/>
            <Route path="/how-to-play" element={<HowToPlay/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
