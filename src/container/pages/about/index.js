import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="p-10">
            about page contains

            <ul>

                <li> er diagrams </li>
                <li> features of project </li>
                <li> future plans </li>
                <li> etc... </li>
            </ul>

            <div>
                <Link to='/login'>Go to login page</Link>
            </div>
        </div>
    )
}

export default About
