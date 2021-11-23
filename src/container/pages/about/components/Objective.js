import React from 'react'

const Objective = () => {
    // const objectives = ['Guest Tracker and Hospitality Management system provides all the action that are happened in daily operation of any hotel', 'It mainly deals with Booking of room, Allocation details of rooms, Room Attendee details, Room rent, Billing, Room vacating, Customer Feedback']
    return (
        <div style={{height:'250px'}} className="flex items-center shadow rounded">
            <div className="px-5 bg-white w-11/12 mx-auto p-5 font-serif shadow">
                <div className="uppercase text-xl text-purple-600 mt-1">
                    Objective
                </div>
                <div className="w-10/12 m-3">
                    <ul className="list-disc list-inside my-2">
                        <li className="my-1">
                            Guest Tracker and Hospitality Management system provides all the
                            action that are happened in daily operation of any hotel
                        </li>
                        <li className="my-1">  
                            It mainly deals with Booking of room, Allocation details of rooms,
                            Room Attendee details, Room rent, Billing, Room vacating, Customer Feedback.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Objective
