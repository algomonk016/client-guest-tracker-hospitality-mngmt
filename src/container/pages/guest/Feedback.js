import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import api from '../../../utils/API/ApiEndpoints'
import FeedbackSVG from './components/FeedbackSVG'
import ReactStars from 'react-stars'
import Label from '../../components/Label'
import axios from 'axios'

const Feedback = () => {
    const Navigate = useNavigate()
    const user = sessionStorage.getItem('user')

    const [Details, setDetails] = useState({
        name: '',
        rating: '',
        message: ''
    })

    useEffect(() => {
        if (!user) {
            Navigate(api.slash)
        }
    }, [])

    const doAction = (action, e = null) => {
        if (e) {
            e.preventDefault()
        }

        switch (action) {
            case 'addFeedback':
                console.log('feedback', Details)

                axios.post(api.customer+api.feedback, Details)
                    .then(response=>{
                        console.log('res', response)
                    })
                    .catch(error => {
                        console.log('err', error)
                    })
                break;
            default:
        }
    }

    const valueChanged = (of, newValue) =>{
        switch(of){
            case 'rating':
                setDetails({...Details, rating: newValue})
                break;
            case 'name':
                setDetails({...Details, name: newValue})
                break;
            case 'message':
                setDetails({...Details, message: newValue})
                break;
            default:
        }
    }

    return (
        <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg h-screen">
            <div className="flex flex-col justify-around">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                </div>
                <div className="text-center">
                    <FeedbackSVG />
                </div>
            </div>
            <div className="my-auto">
                <div>
                    <Label label='Full Name' />
                    <input
                        className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        onChange = {(e) => valueChanged('name', e.target.value)}
                    />
                </div>
                <div className="mt-8">
                    <Label label='Rating' />
                    <ReactStars
                        count={10}
                        size={20}
                        color2={'blue'}
                        onChange = {(newValue) => valueChanged('rating', newValue)}
                        value={Details.rating}
                    />
                </div>
                <div className="mt-8">
                    <Label label='Message' />

                    <textarea
                        className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        defaultValue={""}
                        onChange = {(e) => valueChanged('message', e.target.value)}
                    />
                </div>
                <div className="mt-8">
                    <button
                        className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                        onClick={(e) => doAction('addFeedback', e)}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Feedback
