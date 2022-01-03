import './loginPage.css';

import { FaUser } from 'react-icons/fa';

function LoginPage() {
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                {/* Tabs Titles */}
                {/* Icon */}
                <div className="fadeIn first">
                    <FaUser size={35} color='lightgray' className='icon'/>
                </div>
                {/* Login Form */}
                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="Email" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="Senha" />
                    <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
                </form>
                {/* Remind Passowrd */}
                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;