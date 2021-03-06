import React from 'react'
import LoginOption from './components/LoginOption'
import reception from '../../../assets/receptionist.jpeg'
import guest from '../../../assets/guest.jpeg'

const Login = () => {
    return (
        <section className="text-gray-600">
            <div className="bg-purple-200 py-5 text-purple-600">
                <p className="uppercase text-2xl text-center">Login Options</p>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <LoginOption img={reception} />
                    <LoginOption img={guest} guest={true} />
                </div>
            </div>
        </section>
    )
}

export default Login
