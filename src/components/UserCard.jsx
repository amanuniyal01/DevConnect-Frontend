import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function UserCard() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("")
    const [about, setAbout] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [skills, setSkills] = useState("");
    const [age, setAge] = useState("")
    const user = useSelector((store) => store.user)
    return (
        <div>
           
            {user?.photoUrl?<>
            <img src={user?.photoUrl} alt="user photo"/>
            </>:<>
            <img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="user photo"/>
            </>}
            <h1>{user.firstName} {user.lastName} </h1>
            <p>{user.about}</p>
            <p>{user.skills}</p>
            <p></p>
        </div>
    )
}

export default UserCard