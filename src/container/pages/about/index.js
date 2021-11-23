import React from 'react'
import { Link } from 'react-router-dom'
import { constants } from '../../../utils/constants'
import Modules from './components/Modules'
import Objective from './components/Objective'

const About = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* navbar */}
            <div className="rounded-b-lg bg-purple-200 py-5 flex justify-between my-0 shadow">
                <div className="uppercase text-2xl font-serif text-purple-600 ml-5 mt-1">{constants.projectName}</div>
                <Link className="px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800 mr-8 py-2 cursor-pointer" to='/login'>Contiue to project</Link>
            </div>

            <Objective />
            <Modules />

        </div>
    )
}

export default About
