import React from 'react'
import FoodItem from './components/FoodItem'

const Restaurant = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                </div>
            </div>
        </section>
    )
}

export default Restaurant
