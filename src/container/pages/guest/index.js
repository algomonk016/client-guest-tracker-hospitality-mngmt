import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Options from './components/Options'
import raise from '../../../assets/raise.jpeg'
import food from '../../../assets/food.jpeg'
import api from '../../../utils/API/ApiEndpoints'
import message from '../../../utils/messages'

const Guest = () => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    const Navigate = useNavigate()

    useEffect(()=>{
        if(!sessionStorage.getItem('user'))
            Navigate(api.slash)
    }, [])

    const doAction = (action, e) => {
        e.preventDefault()
        switch (action) {
            case 'logout':
                sessionStorage.clear()
                Navigate(api.slash)
                break;
            default:
        }
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="relative bg-purple-200 pb-10">
                <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Hi {user?.FirstName + ' ' + user?.LastName}</h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                    <p className="text-base w-2/3"> {message.guestWelcomeMessage} </p>
                </div>
                <button 
                    onClick={(e) => doAction('logout', e)} 
                    className="absolute right-5 top-5 bg-red-300 px-3 py-1 rounded-lg text-red-700 hover:bg-red-400 hover:text-red-800"
                >
                    Logout
                </button>
            </div>

            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap -m-4 justify-around">
                    <Options
                        category='Mess & Food'
                        title='Have some delicious food '
                        img={food}
                        message='People who love to eat are always the best people'
                        button='Order Some Food'
                        to={'restaurant'}
                    />
                    <Options
                        category='Hospitality'
                        title='How was your experience'
                        img={raise}
                        message="We are constantly striving to improve and we'd love to hear from you on your experience with us. "
                        button='Share your feedback'
                        to='feedback'
                    />
                </div>
            </div>
        </section>
    )
}

export default Guest