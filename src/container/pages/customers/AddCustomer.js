import React from 'react'
import DropdownSVG from '../../../assets/svg/DropdownSVG'
import Label from '../../components/Label'

const AddCustomer = () => {

    const labelStyle = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    const fieldStyle = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    const containerStyle = "w-full md:w-1/3 px-3 mb-6 md:mb-0"
    const headingStyle = "uppercase mb-5 text-xl bold border-b-2 pb-2 border-indigo-300"

    const doAction = (action, e) => {
        e.preventDefault()

        switch(action){
            case 'addEntry':
                break;
            default:

        }
    }

    return (
        <form>
            <h1 className="text-3xl uppercase text-center py-5 mb-5 text-gray-700">add an entry</h1>
            <div className="md:grid md:grid-cols-2">
                {/* left side */}
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
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <Label label="Last name" />
                            <input
                                className={fieldStyle}
                                type="text"
                                placeholder="Last Name"
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
                            />
                        </div>
                        <div className={containerStyle}>
                            <Label label="Age" />
                            <input className={fieldStyle} type="number" placeholder="e.g. 20" />
                        </div>
                        <div className={containerStyle + " mt-5"}>
                            <Label label="Gender" />
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Trans</option>
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
                            />
                        </div>
                        <span className="px-6 my-5 bg-green-300 flex items-center md:mb-0 rounded-full cursor-pointer"> + </span>
                    </div>
                </div>

                {/* right side */}
                <div className="my-5 m-10">
                    <h3 className={headingStyle}> address </h3>

                    <div className="-mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <Label label='Street/House' />
                            <textarea 
                                className={fieldStyle} 
                                placeholder="e.g. Plot No-5, Laxmi Vihar, Uttam Nagar" 
                                required
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
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <Label label='State' />
                            <input
                                className={fieldStyle}
                                type="text"
                                placeholder="e.g. Uttar Pradesh"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
                            <Label label='Pincode' />
                            <input
                                className={fieldStyle}
                                type="number"
                                placeholder="e.g. 208026"
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <button 
                    type="submit"
                    className="bg-green-200 text-green-700 px-7 py-3 rounded hover:bg-green-400 hover:text-green-800 "
                    onClick={(e)=> doAction('addEntry', e)}
                >
                    Save Data
                </button>
            </div>

        </form>
    )
}

export default AddCustomer
