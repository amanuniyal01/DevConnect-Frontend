import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

function Body() {
    const dispatch = useDispatch()
    const fetchUser = async () => {
        try {
            const result = await axios.get(BASE_URL + "/profile/view", {
                withCredentials: true,
            })
            dispatch(addUser(result.data));
        }
        catch (err) {
            console.error(err)
        }

    }
    return (
        <div className='bg-blue-100'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Body