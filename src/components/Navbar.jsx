import React from 'react'
import { useNavigate } from 'react-router'

function Navbar() {
    const navigate=useNavigate()
    return (
        <nav className="navbar bg-blue-100/70 shadow-lg fixed top-0 left-0 w-full z-50 px-4 md:px-8">

           
            <div onClick={()=>navigate("/")}  className=" cursor-pointer flex-1 ">
                <img
               
                    className="h-8 sm:h-10"
                    src="https://devconnect.uk/assets/DC_Logo--0ebJzRZ.svg"
                    alt="DevConnect logo"
                />
            </div>

            <div className="flex items-center gap-2 sm:gap-4">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-9 sm:w-10 rounded-lg">
                            <img
                                alt="User avatar"
                                src="https://static.vecteezy.com/system/resources/previews/029/711/176/non_2x/developer-with-ai-generated-free-png.png"
                            />
                        </div>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-48 sm:w-52 p-2 shadow"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar