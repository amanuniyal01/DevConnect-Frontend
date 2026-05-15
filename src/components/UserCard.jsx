import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function UserCard({ user }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("")
    const [about, setAbout] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [skills, setSkills] = useState("");
    const [age, setAge] = useState("")

    return (
        <div className='flex items-center justify-center flex-col bg-blue-200 p-6 rounded-4xl shadow-black'>

            {user?.photoUrl ? <>
                <img className='rounded-lg p-4' src={user?.photoUrl} alt="user photo" />
            </> : <>
                <img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="user photo" />
            </>}
            <h1 className='font-bold'>{user.firstName} {user.lastName} - {user.gender}</h1>
        
            <p className='font-semibold'>{user.about}</p>
            <p>{user.skills}</p>
            <p></p>
        </div>
    )
}

export default UserCard