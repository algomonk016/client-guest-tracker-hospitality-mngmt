import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../../utils/API/ApiEndpoints'
import { constants } from '../../../utils/constants'
import { separateId } from '../../../utils/helper'
import message from '../../../utils/messages'

const CheckedOutCustomers = () => {
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
        PayableAmount: '',
        OutTime: ''
    }])

    useEffect(() => {
        doAction('getCustomers')
    }, [])

    const doAction = (action, e = null) => {
        e?.preventDefault()
        switch (action) {
            case 'getCustomers':
                axios.get(api.reception + api.checkedOut)
                    .then(response => {
                        console.log('response', response)
                        setCustomersList(response.data.data)
                    })
                    .catch(error => {
                        console.log('error', error)
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
                    Checkedout Guests List
                </h3>

                <div className="flex justify-between mb-2">
                    <Link to={api.reception + api.customer} className="bg-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-400  hover:text-gray-800 border-2 border-gray-300 shadow mr-5">
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
                            <th>{constants?.outTime}</th>
                            <th>{constants?.cost}</th>
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
                                            {customer?.OutTime}
                                        </td>
                                        <td className="text-center"> 
                                            {constants.rupee} {customer?.PayableAmount}
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

export default CheckedOutCustomers
