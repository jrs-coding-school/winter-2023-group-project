import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Layout from './layouts'
import ThemeContextProvider from './context/themeContext'
import Login from './views/Login'
import RegisterForm from './views/Register'
import UserProfile from './views/UserProfile'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/user/:username" element={<UserProfile/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
