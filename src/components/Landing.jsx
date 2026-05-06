import React from 'react'
import { useNavigate } from 'react-router';
// import landing from "../assets/landing.svg"

function Landing() {
    const navigate = useNavigate();

    return (
        <div className="md:flex items-center justify-center h-screen bg-blue-50">


            <div className="landing h-100 md:w-1/2 flex items-center justify-center">
                
            </div>


            <div className="md:w-1/2 flex flex-col gap-6 mx-auto ">


                <h1 className="text-5xl font-bold text-slate-800  leading-tight">
                    Welcome to <span className="text-blue-500">DevConnect</span> 
                </h1>

                <p className="text-slate-500 font-semibold max-w-sm">
                    Swipe through developers, match with your next collaborator, and build something amazing together.
                </p>

                <div className="flex gap-6">
                    {[["10K+", "Developers"], ["500+", "Projects"], ["98%", "Matches"]].map(([num, label]) => (
                        <div key={label}>
                            <div className="text-2xl font-bold text-slate-800">{num}</div>
                            <div className="text-slate-400 text-sm">{label}</div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => navigate("/app")}
                    className="btn hover:bg-blue-400 bg-blue-300/10 btn-primary max-w-40 gap-2"
                >
                    Let's Connect →
                </button>
            </div>
        </div>
    )
}

export default Landing;