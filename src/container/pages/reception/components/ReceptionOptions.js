import React from 'react'
import { Link } from 'react-router-dom'

const ReceptionOptions = ({
    svg,
    to = '',
    title = '',
}) => {
    return (
            <Link to={to} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    {svg}
                    {/* <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2> */}
                    <p className="leading-relaxed">{title}</p>
                </div>
            </Link>
    )
}

export default ReceptionOptions
