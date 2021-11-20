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
import ApiEndpoints from '../utils/API/ApiEndpoints';
import CheckedOutCustomers from '../container/pages/checkedoutCustomers';

const PageRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* login */}
                <Route path={ApiEndpoints.slash} element={<About />} />
                <Route path={ApiEndpoints.login} element={<Login />} />
                <Route path={ApiEndpoints.login + ApiEndpoints.guest} element={<GuestLogin />} />
                <Route path={ApiEndpoints.login + ApiEndpoints.reception} element={<ReceptionLogin />} />

                {/* landing pages */}
                <Route path={ApiEndpoints.guest} element={<Guest />} />
                <Route path={ApiEndpoints.reception} element={<Reception />} />

                {/* for guest */}
                <Route path={ApiEndpoints.guest + ApiEndpoints.feedback} element={<Feedback />} />
                <Route path={ApiEndpoints.guest + ApiEndpoints.restaurant} element={<Restaurant />} />

                {/* for recepetion */}
                <Route path={ApiEndpoints.reception} element={<Reception />} />
                <Route path={ApiEndpoints.reception + ApiEndpoints.customer} element={<Customers /> } />
                <Route path={ApiEndpoints.reception + ApiEndpoints.customer + ApiEndpoints.new} element={<AddCustomer /> } />
                <Route path={ApiEndpoints.reception + ApiEndpoints.customer + ApiEndpoints.checkedOut} element={<CheckedOutCustomers /> } />
                <Route path={ApiEndpoints.reception + ApiEndpoints.feedback} element={<FeedbackView /> } />
            </Routes>
        </Router>
    )
}

export default PageRoutes
