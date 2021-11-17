import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import Reception from '../../container/pages/reception';
import Customers from '../../container/pages/reception/customers';
import FeedbackView from '../../container/pages/reception/feedback';

const ReceptionRoutes = () => {
    return (
        <Routes>
            <Route path='/customers' element={<Customers />} />
            <Route path='/feedbacks' element={<FeedbackView />} />
            <Route path='/' element={<Reception />} />
        </Routes>
    )
}

export default ReceptionRoutes
