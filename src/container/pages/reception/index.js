import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FeedbackSVG from '../../../assets/svg/FeedbackSVG'
import UsersSVG from '../../../assets/svg/UsersSVG'
import ApiEndpoints from '../../../utils/API/ApiEndpoints'
import ReceptionOptions from './components/ReceptionOptions'
import { useNavigate } from 'react-router'

const Reception = () => {
    const Navigate = useNavigate()
    const user = JSON.parse(sessionStorage.getItem('user'))
    const gender = user?.Gender
    const name = user?.Name

    useEffect(() => {
        if (!sessionStorage.getItem('user') || !gender ) {
            Navigate(ApiEndpoints.slash)
        }
    }, [])
    

    const greeting = "Hello " + (gender === 'M' ? 'Mr.' : 'Ms.') + ' ' + name;
    const message = "Hope you're doing good"

    const doAction = (action) => {
        switch (action) {
            case 'logout':
                sessionStorage.clear();
                Navigate(ApiEndpoints.slash)
                break;
            default:

        }
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="pb-10 mx-auto">
                <div className="flex flex-col text-center w-full py-10 mb-10 bg-purple-200">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        {greeting}
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        {message}
                    </p>

                    <div className="absolute top-100 right-10 bg-red-200 mr-10 px-4 py-2 text-red-500 rounded shadow cursor-pointer" onClick={() => doAction('logout')}>
                        Logout
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 text-center justify-around">
                    <ReceptionOptions svg={<UsersSVG />} title='Customers' to={ApiEndpoints.customer1} />
                    <ReceptionOptions svg={<FeedbackSVG />} title='Feedbacks' to={ApiEndpoints.feedback1} />
                </div>
            </div>
        </section>

    )
}

export default Reception
