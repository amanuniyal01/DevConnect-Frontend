import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

function Body() {
    return (
        <div className='bg-blue-100'>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Body