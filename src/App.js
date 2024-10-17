import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './routes/Sidebar'
import { Route, Routes } from 'react-router-dom'
import M1S from './pages/M1S'
import Home from './pages/Home'
const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Sidebar/>}>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/m1s' element={<M1S/>}/>
        </Route>
      </Routes> 
  )
}

export default App
