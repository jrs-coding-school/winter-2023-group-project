import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Layout from './layouts'
import Leaderboard from './views/Leaderboard'
import ThemeContextProvider from './context/themeContext'
import Login from './views/Login'
import RegisterForm from './views/Register'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/leaderboard" element={<Leaderboard/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
