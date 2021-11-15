import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const GuestLogin = () => {

    const [guestId, setGuestId] = useState(null)
    const [guestPass, setGuestPass] = useState(null)

    const Navigate = useNavigate()

    const doAction = (action='', e) => {
        e.preventDefault()

        switch(action){
            case 'signin':
                alert('This need to be added')
                console.log(guestId, guestPass)
                Navigate('/guest')
                break;
        }
    }

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> Please Sign in here </h2>
                </div>
                <form className="mt-8 space-y-6">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="phone-no" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Phone Number"
                                onChange={(e)=>setGuestId(e.target.value.trim())}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                onChange={(e)=>setGuestPass(e.target.value.trim())}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={(e)=>doAction('signin', e)}
                        >   
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GuestLogin
