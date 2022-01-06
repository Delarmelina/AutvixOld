import React from "react";

import * as FaIcon from "react-icons/fa";
import * as MdIcon from "react-icons/md";

export default function header() {

    return (
        <nav className='main-header navbar navbar-expand'>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="/" role='button'><FaIcon.FaList size={20} color={`${ localStorage.getItem('darkmode') === 'true' ? 'white' : '' }`} /></a>
                </li>
            </ul>

            <ul className='navbar-nav ml-auto'>
                <li className="nav-item">
                    <a className="nav-link" href='/' onClick={() => {
                            if (localStorage.getItem("darkmode") === 'true') {
                                localStorage.setItem("darkmode", 'false');
                                window.location.reload();
                            } else {
                                localStorage.setItem("darkmode", 'true');
                                window.location.reload();
                            }
                        }}>
                        <MdIcon.MdOutlineInvertColors size={20} color={`${ localStorage.getItem('darkmode') === 'true' ? 'white' : '' }`}  />
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="/">
                        <FaIcon.FaUser size={20} color={`${ localStorage.getItem('darkmode') === 'true' ? 'white' : '' }`} /></a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <a href="/" className="dropdown-item">
                            <div className="media">
                                <FaIcon.FaUserCircle size={50} color={`${ localStorage.getItem('darkmode') === 'true' ? 'white' : '' }`} />
                                <div className="media-body ml-3">
                                    <h3 className="dropdown-item-title">
                                        {JSON.parse(localStorage.getItem('user')).name}
                                    </h3>
                                    <p className="text-sm">{JSON.parse(localStorage.getItem('user')).email}</p>
                                    <p className="text-sm text-muted">{JSON.parse(localStorage.getItem('user')).office}</p>

                                    <div className="dropdown-divider"></div>
                                    <div className="dropdown-item">
                                        <FaIcon.FaSignOutAlt size={20} color={`${ localStorage.getItem('darkmode') === 'true' ? 'white' : '' }`} />
                                        <span>Sair</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}