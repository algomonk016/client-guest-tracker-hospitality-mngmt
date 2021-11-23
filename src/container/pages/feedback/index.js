import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import api from '../../../utils/API/ApiEndpoints'
import { constants } from '../../../utils/constants'
import { separateId } from '../../../utils/helper'
import message from '../../../utils/messages'

const FeedbackView = () => {
    const headingStyle = "uppercase text-2xl bold pb-2 ml-10"
    const [Feedback, setFeedback] = useState([{

    }])

    useEffect(() => {
        doAction('getFeedback')
    }, [])

    const doAction = (action, e = null) => {
        e?.preventDefault()
        switch (action) {
            case 'getFeedback':
                console.log('called')
                axios.get(api.reception + api.feedback)
                    .then(response => {
                        console.log('response', response)
                        if(response.data.message !== message.success){
                            return alert('Something went wrong') 
                        }

                        setFeedback(response.data.data)
                    })
                    .catch(error => {
                        console.log('error', error)
                    })
                break;
            default:
                console.log('I can feel something is not right')
        }
    }
    

    return (
        <div>
            <div className="bg-purple-200 pt-4 pb-3 mb-3 flex justify-between items-center">
                <h3 className={headingStyle}>
                    Feedbacks
                </h3>

                <div className="flex justify-between mb-2">
                    <Link to={api.reception} className="bg-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-400  hover:text-gray-800 border-2 border-gray-300 shadow mr-5">
                        Go Back
                    </Link>
                </div>
            </div>
            <div>
                <table className="table-auto w-11/12 mx-auto shadow p-5">
                    <thead>
                        <tr className="bg-gray-100 py-2">
                            <th className='p-3'>{constants?.sn}</th>
                            <th >{constants?.name}</th>
                            <th>{constants?.room}</th>
                            <th>{constants?.feedback}</th>
                            <th>{constants?.rating}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Feedback.map((feedback, ind = 0) => {
                                ind++
                                return (
                                    <tr
                                        key={ind + 'feedbackTable'}
                                        id={feedback?.CustId + 'feedbackData'}
                                        className="shadow"
                                    >
                                        <td className="text-center py-4 my-3" >
                                            {ind}
                                        </td>
                                        <td className="text-center" >
                                            {feedback?.Name}
                                        </td>
                                        <td
                                            className="text-center"
                                        >
                                            {feedback?.RoomNo}
                                        </td>
                                        <td className="text-center" >
                                            {feedback?.Message}
                                        </td>
                                        <td className="text-center" >
                                            <ReactStars count={10} edit={false} value={feedback?.Rating} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FeedbackView
