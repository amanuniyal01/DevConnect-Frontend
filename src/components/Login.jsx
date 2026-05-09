import React, { useState } from 'react'
import loginImage from "../assets/landing.svg"
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';

function Login() {
    const [email, setEmail] = useState("aman@gmail.com");
    const [password, setPassword] = useState("amanA@123");
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleSubmit = async () => {
        try {
            const result = await axios.post("http://localhost:3000/login", {
                email, password
            }, {
                withCredentials: true,
            });
            dispatch(addUser(result.data))
            navigate("/app/feed")
        }
        catch (err) {
            console.log(err)
        }


    }

    return (
        <div className="bg-blue-50 min-h-screen items-center justify-center flex flex-col md:flex-row">


            <div className="hidden md:flex md:w-1/2 items-center justify-center p-12">
                <img
                    src={loginImage}
                    alt="DevConnect illustration"
                    className="w-full max-w-md object-contain"
                />
            </div>


            <div className="w-full md:w-1/2 flex items-center mt-5 justify-center px-6 py-12">

                <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-lg shadow-blue-100">


                    <div className="bg-blue-600 px-8 py-8 text-center">
                        <div className="w-14 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>

                        <p className="text-blue-200 text-sm mt-1">
                            Login to <span className="text-white font-semibold">DevConnect</span>
                        </p>
                    </div>


                    <div className="px-8 py-7  flex flex-col gap-5">

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-slate-500">
                                Email address
                            </label>

                            <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="bg-transparent outline-none text-sm w-full text-slate-700 placeholder-slate-400"
                                />
                            </div>
                        </div>


                        <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-slate-500">
                                    Password
                                </label>
                                <span className="text-xs text-blue-500 cursor-pointer hover:underline">
                                    Forgot password?
                                </span>
                            </div>

                            <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="bg-transparent outline-none text-sm w-full text-slate-700 placeholder-slate-400"
                                />
                            </div>
                        </div>


                        <button
                            onClick={handleSubmit}
                            className="btn bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl w-full border-none mt-1 !py-3">
                            Login
                        </button>


                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-px bg-slate-200" />
                            <span className="text-xs text-slate-400">or</span>
                            <div className="flex-1 h-px bg-slate-200" />
                        </div>


                        <p className="text-center text-sm text-slate-500">
                            Don't have an account?{" "}
                            <span
                                onClick={() => navigate('/signup')}
                                className="text-blue-500 font-semibold cursor-pointer hover:text-blue-600">
                                Sign up
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login