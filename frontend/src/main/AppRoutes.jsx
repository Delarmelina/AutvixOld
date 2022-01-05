import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from '../pages/auth/loginPage';
import MainPage from './mainPage';

export default props => {
    return (
        <Routes>
            <Route path="*" element={props.isLogged ? <MainPage /> : <Navigate to="login" />} />
            <Route path="login" element={<LoginPage />} />
        </Routes>
    );
}