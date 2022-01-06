import React from "react";

import * as FaIcon from "react-icons/fa";

export default props => (
  <nav className="main-header navbar navbar-expand navbar-black navbar-dark">
      <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role='button'><FaIcon.FaList size={20}/></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
              <a className="nav-link" href="#"><FaIcon.FaList size={20}/></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
              <a className="nav-link" href="#"><FaIcon.FaList size={20}/></a>
          </li>
      </ul>

      <ul className='navbar-nav ml-auto'> 
          <ul className="navbar-nav">
              
          </ul>
      </ul>
  </nav>   
)