import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../../utils/API/ApiEndpoints'
import { constants } from '../../../utils/constants'

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
                axios.get(api.reception + api.customer)
                    .then(response => {
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

    return (
        <div>
            {/* header */}
            <div>
                <Link to="new">
                    Add new Customer
                </Link>
            </div>

            {/* body */}
            <div>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th>{constants.sn}</th>
                            <th>{constants.name}</th>
                            <th>{constants.room}</th>
                            <th>{constants.contactNo}</th>
                            <th>{constants.iskeSaath}</th>
                            <th>{constants.inTime}</th>
                            <th>{constants.action}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CustomersList.map((customer, ind=0) => {
                                ind++

                                return(
                                    <tr key = {ind + 'customerTable'}>
                                        <td> {ind} </td>
                                        <td> {customer.FirstName + ' ' + customer.LastName} </td>
                                        <td> {customer.Room} </td>
                                        <td> {customer.Phone} </td>
                                        <td> {customer.IskeSaath} </td>
                                        <td> {customer.InTime} </td>
                                        <td> Kick him out </td>
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
