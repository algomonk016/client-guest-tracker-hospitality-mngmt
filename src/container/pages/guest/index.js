import React from 'react'
import Options from './components/Options'
import raise from '../../../assets/raise.jpeg'
import food from '../../../assets/food.jpeg'

const Guest = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 justify-around">
                    <Options 
                        category='Mess & Food'
                        title = 'Have some delicious food '
                        img = {food}
                        message = 'People who love to eat are always the best people'
                        button='Order Some Food'
                        to='restaurant'
                    />
                    <Options 
                        category='Hospitality'
                        title = 'How was your experience'
                        img = {raise}
                        message = "We are constantly striving to improve and we'd love to hear from you on your experience with us. "
                        button='Raise a Problem'
                        to='feedback'
                    />
                </div>
            </div>
        </section>
    )
}

export default Guest