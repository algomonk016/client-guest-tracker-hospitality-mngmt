import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import About from '../container/pages/about';
import Guest from '../container/pages/guest';
import Feedback from '../container/pages/guest/Feedback';
import Restaurant from '../container/pages/guest/Restaurant';
import Login from '../container/pages/login';
import GuestLogin from '../container/pages/login/GuestLogin';
import ReceptionLogin from '../container/pages/login/ReceptionLogin';
import Reception from '../container/pages/reception';
import Customers from '../container/pages/customers'
import FeedbackView from '../container/pages/feedback';
import AddCustomer from '../container/pages/customers/AddCustomer';

const PageRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* login */}
                <Route path="/" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/guest" element={<GuestLogin />} />
                <Route path="/login/reception" element={<ReceptionLogin />} />

                {/* landing pages */}
                <Route path="/guest" element={<Guest />} />
                <Route path="/reception" element={<Reception />} />

                {/* for guest */}
                <Route path="/guest/feedback" element={<Feedback />} />
                <Route path="/guest/restaurant" element={<Restaurant />} />

                {/* for recepetion */}
                <Route path='/reception' element={<Reception />} />
                <Route path='/reception/customers' element={<Customers /> } />
                <Route path='/reception/customers/new' element={<AddCustomer /> } />
                <Route path='/reception/feedbacks' element={<FeedbackView /> } />
            </Routes>
        </Router>
    )
}

export default PageRoutes
