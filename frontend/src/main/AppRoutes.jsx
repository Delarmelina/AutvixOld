import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from '../pages/auth/loginPage';
import MainPage from './mainPage';

import { VerifyLogin } from "../services/userMethods";

export default props => {

    const [element, setElement] = React.useState(<MainPage />);

    React.useEffect(() => {
        VerifyLogin().then(res => {
            if (res) {
                console.log('logado');
                setElement(<MainPage />);
            }else{
                console.log('deslogado');
                setElement(<LoginPage />);
            }
        });
    }, []);

    return (
        <Routes>
            <Route path="*" element={element}/>
        </Routes>

    );
}