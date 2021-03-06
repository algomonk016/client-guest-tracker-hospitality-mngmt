import React from 'react'
import { Link } from 'react-router-dom'
import ApiEndpoints from '../../../../utils/API/ApiEndpoints'

const LoginOption = ({
    img=null, 
    guest=false
}) => {
    return (
        <div className="sm:w-1/2 mb-10 px-4 ">
            <div className="rounded-lg h-64 overflow-hidden">
                <img 
                    alt="content" 
                    className="object-cover object-center h-full w-full" 
                    src={ img !== null ? img : "https://dummyimage.com/1201x501" } 
                />
            </div>
            <h2 
                className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 uppercase"
            >
                { guest ? 'Guest' : 'Receptionist' } Login
            </h2>
            
            <p className="leading-relaxed text-base">  </p>
            
            <Link 
                className="flex mx-auto mt-6 text-white bg-purple-400 border-0 py-2 px-5 focus:outline-none hover:bg-purple-500 rounded uppercase" 
                to={guest===true ? (ApiEndpoints.login+ApiEndpoints.guest):(ApiEndpoints.login+ApiEndpoints.reception) }
            >
                {guest ? 'Guest ': 'Reception '} Login
            </Link>
        </div>
    )
}

export default LoginOption
