import React from "react";

import * as FaIcon from "react-icons/fa";
import * as BiIcon from "react-icons/bi";
import * as AiIcon from "react-icons/ai";

export default props => (
  <nav className="main-header navbar navbar-expand navbar-dark navbar-black">
      <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#"><FaIcon.FaList size={20}/></a>
          </li>
      </ul>

      <ul className='navbar-nav ml-auto'> 
          <ul className="navbar-nav">
              <li className="nav-item dropdown">
                  <a className="nav-link" data-toggle="dropdown" href="#">
                      <FaIcon.FaUser size={20}/></a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                      <a href="#" class="dropdown-item">
                          <div className="media">
                              <FaIcon.FaUserCircle size={50}/>
                              <div className="media-body ml-3">
                                  <h3 className="dropdown-item-title">
                                      {props.name}
                                  </h3>
                                  <p className="text-sm">{props.email}</p>
                                  <p className="text-sm text-muted">{props.function}</p>

                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                      <FaIcon.FaSignOutAlt size={20}/>
                                      <span>Sair</span>
                                  </a>
                              </div>        
                          </div>
                      </a>
                  </div>
              </li>
          </ul>
      </ul>
  </nav>   
)