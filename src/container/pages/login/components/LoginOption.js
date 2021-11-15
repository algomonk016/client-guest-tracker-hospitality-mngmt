import React from 'react'
import { Link } from 'react-router-dom'

const LoginOption = ({
    img=null, 
    guest=false
}) => {
    return (
        <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
                <img 
                    alt="content" 
                    className="object-cover object-center h-full w-full" 
                    src={ img !== null ? img : "https://dummyimage.com/1201x501" } 
                />
            </div>
            
            <h2 
                className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3"
            >
                { guest ? 'Guest' : 'Receptionist' } Login
            </h2>
            <p className="leading-relaxed text-base">  </p>
            
            <Link 
                className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" 
                to={guest===true ? '/login/guest':'/login/reception' }
            >
                {guest ? 'Guest ': 'Reception '} Login
            </Link>
        </div>
    )
}

export default LoginOption
