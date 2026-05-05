
import React from 'react'
import { useNavigate } from 'react-router';
function Landing() {
    const navigate = useNavigate();

    return (
        <div className="landing h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to DevConnect 🚀</h1>
            <button 
                className="btn  btn-primary"
                onClick={() => navigate("/app")}
            >
                Get Started
            </button>
        </div>
    )
}

export default Landing;