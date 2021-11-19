import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { colors } from '../../../assets/colors'
import DropdownSVG from '../../../assets/svg/DropdownSVG'
import api from '../../../utils/API/ApiEndpoints'
import message from '../../../utils/messages'
import Label from '../../components/Label'
import Room from './components/Room'

const AddCustomer = () => {

    const fieldStyle = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    const containerStyle = "w-full md:w-1/3 px-3 mb-6 md:mb-0"
    const headingStyle = "uppercase mb-5 text-xl bold border-b-2 pb-2 border-purple-300"
    const Navigate = useNavigate()

    const [Details, setDetails] = useState({
        FirstName: '',
        LastName: '',
        ContactNo: '',
        Age: '',
        Gender: 'M'
    })

    const [Address, setAddress] = useState({
        Street: '',
        Landmark: '',
        City: '',
        State: '',
        Pincode: ''
    })

    const [WithHim, setWithHim] = useState([])
    const [RoomSelected, setRoomSelected] = useState()
    const [showModal, setShowModal] = useState(false)
    const [Rooms, setRooms] = useState([{
        Cost: '',
        RoomNo: '',
        Floor: '',
        IsOccupied: '',
        RoomType: '',
    }])

    // useEffect(()=>{
    //     console.log('Selected', RoomSelected)
    // }, [RoomSelected])

    useEffect(() => {
        doAction('getRooms')
    }, [])

    const valueChanged = (of, newValue) => {
        switch (of) {
            case 'firstName':
                setDetails({ ...Details, FirstName: newValue })
                break;
            case 'lastName':
                setDetails({ ...Details, LastName: newValue })
                break;
            case 'contactNo':
                setDetails({ ...Details, ContactNo: newValue })
                break;
            case 'age':
                setDetails({ ...Details, Age: newValue })
                break;
            case 'gender':
                setDetails({ ...Details, Gender: newValue })
                break;
            case 'street':
                setAddress({ ...Address, Street: newValue })
                break;
            case 'landmark':
                setAddress({ ...Address, Landmark: newValue })
                break;
            case 'city':
                setAddress({ ...Address, City: newValue })
                break;
            case 'state':
                setAddress({ ...Address, State: newValue })
                break;
            case 'pin':
                setAddress({ ...Address, Pincode: newValue })
                break;
            case 'withhim':
                const field = document.getElementById('withHim')
                newValue = field.value
                WithHim.push(newValue)
                field.value = ''
                break;
            default:
        }
    }

    const doAction = (action, e = null) => {
        e?.preventDefault()

        switch (action) {
            case 'addEntry':
                console.log('details', Details, Address, WithHim, RoomSelected)
                const Data = {
                    generalDetails: Details,
                    address: Address,
                    withHim: WithHim,
                    roomSelected: RoomSelected
                }

                axios.post(api.reception + api.customer, Data)
                    .then(response => {
                        console.log(response)
                        if(response.data.message === message.success){
                            alert('Data Added')
                            Navigate(api.reception+api.customer)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
                break;

            case 'getRooms':
                axios.get(api.reception + api.room)
                    .then(response => {
                        if (response.data.message !== message.success) {
                            alert('something went wrong, please try later')
                            return
                        }

                        setRooms(response.data.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                break;

            case 'selectRoom':
                const id = e?.target?.id.substring(0, 3)

                if (RoomSelected === id) {
                    document.getElementById(`${id}Room`).style.backgroundColor = colors.available
                    setRoomSelected(null)
                } else {
                    if (RoomSelected) {
                        document.getElementById(`${RoomSelected}Room`).style.backgroundColor = colors.available
                    }
                    document.getElementById(`${id}Room`).style.backgroundColor = colors.selected
                    setRoomSelected(id)
                }
                break;

            case 'showModal':
                setShowModal(true)
                break;

            default:
                console.log('Do nothing')
        }
    }

    return (
        <form>
            <h1 className="text-3xl uppercase bg-purple-200 text-center py-5 mb-5 text-purple-700 shadow">
                add an entry
            </h1>
            <div className="md:grid md:grid-cols-2">
                {/* general details */}
                <div className="my-5 m-10">
                    <h3 className={headingStyle}> general details </h3>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <Label label='First Name' />
                            <input
                                className={fieldStyle}
                                type="text"
                                placeholder="First Name"
                                required
                                onChange={(e) => valueChanged('firstName', e.target.value.trim())}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <Label label="Last name" />
                            <input
                                className={fieldStyle}
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => valueChanged('lastName', e.target.value.trim())}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                            <Label label='Contact Number' />
                            <input
                                className={fieldStyle}
                                type="text"
                                placeholder="Contact Number"
                                required
                                onChange={(e) => valueChanged('contactNo', e.target.value.trim())}
                            />
                        </div>
                        <div className={containerStyle}>
                            <Label label="Age" />
                            <input
                                className={fieldStyle}
                                type="number"
                                placeholder="e.g. 20"
                                onChange={(e) => valueChanged('age', e.target.value.trim())}
                            />
                        </div>
                        <div className={containerStyle + " mt-5"}>
                            <Label label="Gender" />
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    onChange={(e) => valueChanged('gender', e.target.value)}
                                    required>
                                    <option value='M'>Male</option>
                                    <option value='F'>Female</option>
                                    <option value='T'>Trans</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <DropdownSVG />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className={headingStyle}> With him </h3>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-4/5 px-3 mb-6 md:mb-0">
                            <Label label='Name' />
                            <input
                                className={fieldStyle}
                                type="text"
                                placeholder="Name"
                                id='withHim'
                            />
                        </div>
                        <span
                            className="px-6 my-5 bg-green-300 flex items-center md:mb-0 rounded-full cursor-pointer"
                            onClick={() => valueChanged('withhim')}
                        > + </span>
                    </div>
                </div>

                {/* address details */}
                <div className="my-5 m-10">
                    <h3 className={headingStyle}> address </h3>

                    <div className="-mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <Label label='Street/House' />
                            <textarea
                                className={fieldStyle}
                                placeholder="e.g. Plot No-5, Laxmi Vihar, Uttam Nagar"
                                required
                                onChange={(e) => valueChanged('street', e.target.value.trim())}
                            />
                        </div>
                    </div>

                    <div className="-mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <Label label='Landmark' />
                            <input
                                className={fieldStyle}
                                type="text"
                                placeholder="e.g. Near Atul Chawk"
                                onChange={(e) => valueChanged('landmark', e.target.value.trim())}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <Label label='City' />
                            <input
                                className={fieldStyle}
                                type="text"
                                placeholder="e.g. Kanpur"
                                onChange={(e) => valueChanged('city', e.target.value.trim())}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <Label label='State' />
                            <input
                                className={fieldStyle}
                                type="text"
                                placeholder="e.g. Uttar Pradesh"
                                onChange={(e) => valueChanged('state', e.target.value.trim())}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                            <Label label='Pincode' />
                            <input
                                className={fieldStyle}
                                type="number"
                                placeholder="e.g. 208026"
                                onChange={(e) => valueChanged('pin', e.target.value.trim())}
                                required
                            />
                        </div>

                        {/* modal opener */}
                        <div className="w-full px-3 mb-6 mt-5">
                            <button
                                className="bg-purple-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => doAction('showModal')}
                            >
                                Select Room
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* modal */}
            {showModal ? (
                <>
                    <div className="justify-center items-center flex flex-wrap overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-screen">
                        <div className="relative w-4/5 my-6 mx-auto">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                                {/* modal header */}
                                <div className="flex items-start justify-between px-5 py-2 border-b border-solid border-purple-300 rounded-t bg-purple-200">
                                    <h3 className="text-xl font-semibold">
                                        Select Room
                                    </h3>
                                </div>

                                {/* rooms container */}
                                <div className="relative px-2 py-2 flex flex-wrap justify-around bg-gray-100">
                                    {
                                        Rooms.map(room => (
                                            <Room
                                                key={room.RoomNo}
                                                onClick={(e) => doAction('selectRoom', e)}
                                                Cost={room.Cost}
                                                Floor={room.Floor}
                                                RoomType={room.RoomType}
                                                RoomNo={room.RoomNo}
                                                IsOccupied={room.IsOccupied}
                                            />
                                        ))
                                    }
                                </div>

                                {/* modal buttons */}
                                <div className="flex items-center bg-gray-200 justify-end p-2 border-t border-solid border-purple-300 rounded-b ">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-green-200 text-green-700 px-7 py-3 rounded hover:bg-green-400 hover:text-green-800 "
                    onClick={(e) => doAction('addEntry', e)}
                >
                    Save Data
                </button>
            </div>

        </form >
    )
}

export default AddCustomer
