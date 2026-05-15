import React, { useEffect } from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUserFeed } from '../utils/feedSlice'

function Feed() {
    const feed = useSelector((store) => store.feed)
    const dispatch = useDispatch()

    const getFeed = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/feed", {
                withCredentials: true,
            })
            dispatch(addUserFeed(res?.data?.data))
        }
        catch (err) {

        }



    }

    useEffect(() => {
        getFeed()
    }, [])
    return (
        feed && <div className=" flex min-h-screen justify-center  items-center">



            <UserCard user={feed[0]} />
        </div>
    )
}

export default Feed