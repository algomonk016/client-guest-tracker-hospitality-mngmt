import React from 'react'
import FeedbackSVG from '../../../assets/svg/FeedbackSVG'
import UsersSVG from '../../../assets/svg/UsersSVG'
import ApiEndpoints from '../../../utils/API/ApiEndpoints'
import ReceptionOptions from './components/ReceptionOptions'

const Reception = () => {

    const user = JSON.parse(sessionStorage.getItem('user'))
    const gender = user.Gender
    const name = user.Name

    const greeting = "Hello " + (gender==='M'?'Mr.':'Ms.') + ' ' + name;
    const message = "Hope you're doing good"
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        {greeting}
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        {message}
                    </p>
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
