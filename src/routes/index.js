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

            </Routes>
        </Router>
    )
}

export default PageRoutes
