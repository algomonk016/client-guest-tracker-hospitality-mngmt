import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import Login from '../../container/pages/login';
import GuestLogin from '../../container/pages/login/GuestLogin';
import ReceptionLogin from '../../container/pages/login/ReceptionLogin';
const LoginRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="guest" element={<GuestLogin />} />
            <Route path="/reception" element={<ReceptionLogin />} />
        </Routes>
    )
}

export default LoginRoutes
