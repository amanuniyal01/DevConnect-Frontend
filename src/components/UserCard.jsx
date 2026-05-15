import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function UserCard({ user }) {
    return (
        <div className="w-80 rounded-3xl overflow-hidden bg-white shadow-2xl shadow-slate-300 border border-slate-100">

            <div className="relative">
                <img
                    className="w-full p-5 object-cover"
                    src={user?.photoUrl || "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"}
                    alt="user photo"
                />

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-transparent from-white " />
            </div>


            <div className="px-6 pb-6 -mt-4 flex flex-col items-center text-center gap-2">
                <h2 className="text-xl font-bold text-slate-800">
                    {user.firstName} {user.lastName}
                </h2>

                {(user.age || user.gender) && (
                    <span className="text-xs font-medium bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
                        {user.age && user.gender
                            ? `${user.age} • ${user.gender}`
                            : user.age || user.gender}
                    </span>
                )}

                <p className="text-sm font-semibold text-slate-500 leading-relaxed mt-1">
                    {user.about}
                </p>
                {user.skills && <p className='text-sm text-slate-500 leading-relaxed mt-1'>
                    {user.skills}
                </p>}


                <div className="flex gap-4 mt-4 w-full">
                    <button className="flex-1 py-2.5 rounded-2xl border-2 border-red-400 bg-red-400 text-slate-200 font-semibold text-sm hover:bg-red-500 hover:text-white transition-all duration-200">
                        Ignore
                    </button>
                    <button className="flex-1 py-2.5 rounded-2xl bg-linear-to-r from-violet-500 to-indigo-500 text-white font-semibold text-sm hover:from-violet-600 hover:to-indigo-600 shadow-lg shadow-indigo-200 transition-all duration-200">
                        Interested
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserCard