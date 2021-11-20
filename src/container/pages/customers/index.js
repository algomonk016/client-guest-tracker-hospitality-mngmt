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
                console.log('id', id)

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
                            <th>{constants?.sn}</th>
                            <th>{constants?.name}</th>
                            <th>{constants?.room}</th>
                            <th>{constants?.contactNo}</th>
                            <th>{constants?.iskeSaath}</th>
                            <th>{constants?.inTime}</th>
                            <th>{constants?.action}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CustomersList.map((customer, ind=0) => {
                                ind++

                                return(
                                    <tr key = {ind + 'customerTable'} id={customer?.CustId+'CustomerData'}>
                                        <td> {ind} </td>
                                        <td> {customer?.FirstName + ' ' + customer?.LastName} </td>
                                        <td id={customer?.CustId + 'RoomNo'}> {customer?.Room} </td>
                                        <td> {customer?.Phone} </td>
                                        <td> {customer?.IskeSaath} </td>
                                        <td id={customer?.CustId + 'InTime'}> {customer?.InTime} </td>
                                        <td id={customer?.CustId + 'Action'} onClick={(e) => doAction('checkout', e)} > Check Out </td>
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
