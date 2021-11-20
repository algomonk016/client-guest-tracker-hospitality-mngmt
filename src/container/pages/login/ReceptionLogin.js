import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import api from '../../../utils/API/ApiEndpoints'
import message from '../../../utils/messages'

const ReceptionLogin = () => {

    const [EmpId, setEmpId] = useState(null)
    const [EmpPass, setEmpPass] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const Navigate = useNavigate()

    useEffect(() => {
        if (sessionStorage.getItem('user')) {
            Navigate(api.reception)
        }
    }, [])


    const doAction = (action = '', e) => {
        e.preventDefault()
        switch (action) {
            case 'signin':
                const data = {
                    empId: EmpId,
                    password: EmpPass
                }
                setIsLoading(true)

                axios.post(api.reception + api.login, data)
                    .then(res => {
                        if (res.data.message !== message.success) {
                            alert('Wrong Credentials')
                            setIsLoading(false)
                        } else {
                            const user = res.data.data;
                            sessionStorage.setItem('user', JSON.stringify(user))
                            setIsLoading(false)
                            Navigate(api.reception)
                        }
                    })
                    .catch(err => {
                        setIsLoading(false)
                        console.log(err)
                    })
                break;
            default:
        }
    }

    const btnClass = "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    const fieldClass = "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"

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
                                className={fieldClass}
                                placeholder="Phone Number"
                                onChange={(e) => setEmpId(e.target.value.trim())}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className={fieldClass}
                                placeholder="Password"
                                onChange={(e) => setEmpPass(e.target.value.trim())}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            className={btnClass}
                            onClick={(e) => doAction('signin', e)}
                            disabled={isLoading === true ? 1 : 0}
                        >
                            {isLoading ? (
                                <div className="flex items-center ">
                                    <div className="h-3 w-3 bg-none border-2 border-red-300 animate-ping rounded-full mx-2" />
                                    <span className="">Processing</span>
                                </div>
                            ) : 'Sign in'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReceptionLogin