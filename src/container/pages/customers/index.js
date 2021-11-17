import React from 'react'
import { Link } from 'react-router-dom'

const Customers = () => {
    return (
        <div>
            <div>
                Customers list

                <Link to="new">
                    Add new Customer
                </Link>
            </div>
        </div>
    )
}

export default Customers
