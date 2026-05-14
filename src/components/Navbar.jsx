import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { BASE_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'

function Navbar() {
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()
    console.log(user)
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            const loggedOutUser = await axios.post(BASE_URL + "/logout", {}, {
                withCredentials: true,
            })
            dispatch(removeUser())
            navigate("/")

        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <nav className="navbar bg-blue-100/70 shadow-lg fixed top-0 left-0 w-full z-50 px-4 md:px-8">


            <div onClick={() => navigate("/")} className=" cursor-pointer flex-1 ">
                <img

                    className="h-8 sm:h-10"
                    src="https://devconnect.uk/assets/DC_Logo--0ebJzRZ.svg"
                    alt="DevConnect logo"
                />
            </div>

            {user && (
                <div className="flex items-center gap-2 sm:gap-4">


                    <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                        {user?.firstName?.charAt(0)?.toUpperCase()}
                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-9 sm:w-10 rounded-full overflow-hidden">
                                <img
                                    src={user?.photoUrl || "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png";
                                    }}
                                />
                            </div>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            <li className="px-2 py-1 text-sm font-semibold text-gray-500">
                                {user.firstName} {user.lastName}
                            </li>

                            <li>
                                <a>Profile</a>
                            </li>

                            <li>
                                <a>Settings</a>
                            </li>

                            <li onClick={handleLogout}>
                                <a className="text-red-500">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

        </nav>
    )
}

export default Navbar