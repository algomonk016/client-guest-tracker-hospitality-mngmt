import React from 'react'
import List from './List'

const Modules = () => {
    const loginModule=['Used for singing in the receptionists as well as guests', 'The front desk managers can view those feedbacks']
    const CheckIn = ['The system checks room availability and status','Shows free rooms with room details','Book the room and check in the guest']
    const FeedBacks = ['The guests can give ratings and feedback according to their experience', 'The front desk managers can view those feedbacks']
    const CheckOut = ['The system makes the room vacant and checks out the guest']
    return (
        <div className="font-serif px-10 bg-purple-50 py-5">
            <div className="uppercase text-xl text-purple-600 mt-1">
                Modules
            </div>
            <div className=" m-3 grid grid-cols-2">
                <List title='Login Modules' messages={loginModule} />
                <List title='Guest check in and room booking' messages={CheckIn} />
                <List title='Feedbacks' messages={FeedBacks} />
                <List title='Guest check out' messages={CheckOut} />
            </div>
        </div>
    )
}

export default Modules
