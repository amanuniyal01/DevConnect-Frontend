import React from 'react'
import { BrowserRouter, Router, Routes } from 'react-router'
import Body from './components/Body'
import Login from './components/Login'
import Profile from './components/Profile'
import { Route } from 'react-router'

function App() {
  return (
    <div className="p-10">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Body/>} >
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route />

          </Route>
        </Routes>
      </BrowserRouter>




    </div>
  )
}

export default App