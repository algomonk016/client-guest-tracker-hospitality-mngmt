import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../../utils/API/ApiEndpoints'
import { constants } from '../../../utils/constants'
import { separateId } from '../../../utils/helper'
import message from '../../../utils/messages'
import Alert from '../../components/Alert'

const Customers = () => {
    const [CustomersList, setCustomersList] = useState([{
        AddressId: '',
        Age: '',
        CustId: '',
        FirstName: "",
        Gender: "",
        InTime: "",
        IskeSaath: "",
        LastName: "",
        Phone: "",
        Room: '',
    }])

    useEffect(() => {
        doAction('getCustomers')
    }, [])

    const doAction = (action, e = null) => {
        e?.preventDefault()
        switch (action) {
            case 'getCustomers':
                axios.get(api.reception + api.customer + api.new)
                    .then(response => {
                        setCustomersList(response.data.data)
                    })
                    .catch(error => {
                        console.log('error', error)
                    })
                break;

            case 'checkout':
                const id = separateId(e?.target?.id)
                const InTime = document.getElementById(id+'InTime').innerHTML
                const Room = document.getElementById(id + 'RoomNo').innerHTML

                axios.delete(api.reception+api.customer + "/" + id + "/" + InTime + "/" + Room)
                    .then(response => {
                        const Stayed = response.data.TimeStayed
                        const Cost = response.data.Cost
                        if(response.data.message !== message.success){
                            alert('Operation Failed, please check log')
                        } else{
                            const Message = message.checkedOut + Room + ' after staying for ' + Stayed.days + ' days and' + Stayed.hours + ' hours. That costs ' + constants.rupee + Cost
                            alert(Message)
                            doAction('getCustomers')
                        }
                    }) 
                    .catch(error => {
                        console.log('error')
                    })

                break;
            default:
                console.log('I can feel something is not right')
        }
    }

    const headingStyle = "uppercase text-2xl bold pb-2 ml-10"

    return (
        <div>
            {/* header */}
            <div className="bg-purple-200 pt-4 pb-3 mb-3 flex justify-between items-center">
                <h3 className={headingStyle}>
                    Guests List
                </h3>

                <div className="flex justify-between mb-2">
                    <Link to={api.new1} className="bg-purple-300 text-purple-700 px-3 py-2 rounded hover:bg-purple-400  hover:text-purple-800 border-2 border-purple-300 shadow mx-2">
                        Guest Check In
                    </Link>

                    <Link to={api.checkedOut1} className="bg-pink-300 text-pink-700 px-3 py-2 rounded hover:bg-pink-400  hover:text-pink-800 border-2 border-pink-300 shadow mr-5">
                        Checked Out Guests
                    </Link>

                    <Link to={api.reception} className="bg-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-400  hover:text-gray-800 border-2 border-gray-300 shadow mr-5">
                        Go Back
                    </Link>
                </div>

            </div>

            {/* body */}
            <div>
                <table className="table-auto w-11/12 mx-auto shadow p-5">
                    <thead>
                        <tr className="bg-gray-100 py-2">
                            <th className='p-3'>{constants?.sn}</th>
                            <th >{constants?.name}</th>
                            <th>{constants?.room}</th>
                            <th>{constants?.contactNo}</th>
                            <th>{constants?.iskeSaath}</th>
                            <th>{constants?.inTime}</th>
                            <th>{constants?.action}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CustomersList.map((customer, ind = 0) => {
                                ind++

                                return (
                                    <tr
                                        key={ind + 'customerTable'}
                                        id={customer?.CustId + 'CustomerData'}
                                        className="shadow"
                                    >
                                        <td className="text-center py-4 my-3" >
                                            {ind}
                                        </td>
                                        <td className="text-center" >
                                            {customer?.FirstName + ' ' + customer?.LastName}
                                        </td>
                                        <td
                                            className="text-center"
                                            id={customer?.CustId + 'RoomNo'}
                                        >
                                            {customer?.Room}
                                        </td>
                                        <td className="text-center" >
                                            {customer?.Phone}
                                        </td>
                                        <td className="text-center" >
                                            {customer?.IskeSaath}
                                        </td>
                                        <td className="text-center" id={customer?.CustId + 'InTime'}>
                                            {customer?.InTime}
                                        </td>
                                        <td
                                            className="text-center"
                                        >
                                            <span
                                                id={customer?.CustId + 'Action'}
                                                onClick={(e) => doAction('checkout', e)}
                                                className="bg-yellow-400 px-3 py-2 rounded shadow border-2 border-yellow-400 text-yellow-800 cursor-pointer">
                                                CheckOut
                                            </span>
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

export default Customers
