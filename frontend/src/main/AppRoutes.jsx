import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from '../pages/auth/loginPage';
import MainPage from './mainPage';

import { VerifyLogin } from "../services/userMethods";

export default props => {

    const [element, setElement] = React.useState(<div></div>);

    React.useEffect(() => {
        VerifyLogin().then(res => {
            if (res) {
                setElement(<MainPage />);
                // setElementLogin(<Navigate to='/' />);
            }else{
                // setElement(<Navigate to='/login' />);
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