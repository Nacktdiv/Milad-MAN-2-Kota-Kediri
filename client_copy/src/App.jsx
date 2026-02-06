import { useState, useContext, use } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from "./Home"
import Competition from './components/competitions/competition'
import Login from './components/authentication/login'
import Register from './components/authentication/register'
import ProtectedRoute from './ProtectedRoute'
import {SessionPeserta, SessionAdmin} from './Session'
import {  useAuth } from './AuthContext'

function App() {
  const {user} =  useAuth()
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/competition/:idLomba' element={<Competition />}/>
          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/auth/register' element={<Register/>}/>
          <Route path='/session/' element={<ProtectedRoute/>}> 
            {user?.role === "peserta" ? <Route path='*' element={<SessionPeserta/>}/> 
            : <Route path='*' element={<SessionAdmin/>}/> }
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App

