import React from 'react'
import { useNavigate } from 'react-router';
import Navbar from './navbar';
import Footer from './Footer';

function Landing() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-blue-50">

            <Navbar />

            <div className="flex flex-col md:flex-row items-center justify-center flex-1 overflow-hidden">

                <div className="landing w-full h-64 sm:h-80 md:w-1/2 flex items-center justify-center" />

                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5 px-8 pb-12 md:py-0 md:pr-16">

                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                        <span className="pulse-dot" />
                        10K+ developers active
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 leading-tight text-center md:text-left">
                        Welcome to <span className="text-blue-500">DevConnect</span>
                    </h1>

                    <p className="text-slate-500 font-medium max-w-sm leading-relaxed text-center md:text-left">
                        Swipe through developers, match with your next collaborator, and build something amazing together.
                    </p>

                    <div className="flex gap-8">
                        {[["10K+", "Developers"], ["500+", "Projects"], ["98%", "Matches"]].map(([num, label]) => (
                            <div key={label} className="text-center md:text-left">
                                <div className="text-2xl font-bold text-slate-800">{num}</div>
                                <div className="text-slate-400 text-xs uppercase tracking-wide mt-0.5">{label}</div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => navigate("/app")}
                        className="btn bg-blue-500 hover:bg-blue-600 text-white w-56 rounded-xl shadow-md shadow-blue-200"
                    >
                        Let's Connect →
                    </button>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Landing;