import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

function Body() {
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const fetchUser = async () => {
        try {
            const result = await axios.get(BASE_URL + "/profile/view", {
                withCredentials: true,
            })
            dispatch(addUser(result.data));
        }
        catch (err) {
            if (err.response?.status === 401) {
                navigate("/app/login");
            }

            console.error(err)
        }

    }
    useEffect(() => {
        if (!user === null) {

            fetchUser()
        }
    }, [])
    return (
        <div className='bg-blue-100'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Body