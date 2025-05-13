import React from 'react'
import'./App.css'
import Home from './components/Home'
import Form from './components/Form'
import { Card } from '@mui/material'
import Emp from './components/Emp'
import Signup from './components/Signup'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
     <>
     <Home/>
     <Routes>
      <Route path='/' element={<Emp/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/card' element={<Form/>}></Route>
     </Routes>
     </>
  )
}

export default App
