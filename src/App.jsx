import React from 'react'
import { BrowserRouter, Router, Routes } from 'react-router'
import Body from './components/Body'
import Login from './components/Login'
import Profile from './components/Profile'
import { Route } from 'react-router'
import Landing from './components/Landing'

function App() {
  return (
    <div className="">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<Body />} >
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route />

          </Route>
        </Routes>
      </BrowserRouter>




    </div>
  )
}

export default App