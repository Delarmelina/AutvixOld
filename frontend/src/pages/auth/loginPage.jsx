import React, { useState } from 'react';

import './loginPage.css';
import { FaUser } from 'react-icons/fa';

import { login } from '../../services/userMethods';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function loginUser() {
        login(email.email, password.password)
            .then(res => {
                if (res) {
                    window.location.pathname = ''
                    window.location.pathname = localStorage.getItem('lastPage') || '/';
                }
            })
    }

    return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <FaUser size={35} color='lightgray' className='icon'/>
                    </div>

                    <form>
                        <input type="text" 
                            id="login" 
                            className="fadeIn second" 
                            name="login" 
                            placeholder="Email" 
                            onKeyDown={e => { e.key === 'Enter' && loginUser() }}
                            onChange={e => {setEmail({email: e.target.value})}} />
                        <input type="password" 
                            id="password" 
                            className="fadeIn third" 
                            name="login" 
                            placeholder="Senha" 
                            onKeyDown={e => { e.key === 'Enter' && loginUser() }}
                            onChange={e => {setPassword({password: e.target.value})}}/>
                        <input type="button" 
                            className="fadeIn fourth" 
                            defaultValue="Log In" 
                            onClick={loginUser}/>
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
    );
}

export default LoginPage;