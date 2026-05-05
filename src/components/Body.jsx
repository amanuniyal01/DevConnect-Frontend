import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router'

function Body() {
    return (
        <div className=''>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Body