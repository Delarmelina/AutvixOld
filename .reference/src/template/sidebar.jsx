import React from "react";

import * as FaIcon from "react-icons/fa";

import SideBarItem from '../common/components/sidebaritem.jsx';

export default props => (

    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <div className='sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition'>
            <a href="#" className="brand-link">
                <FaIcon.FaCompass size={28} alt="AdminLTE Logo" className="brand-image" style={{ opacity: '.8' }} />
                <span className="ml-2 brand-text font-weight-light">Autvix Engenharia</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <FaIcon.FaUser size={30} className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block h4">Felipe Ferreira</a>
                    </div>
                </div>

                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                        
                        <SideBarItem title='Home' link='#' new
                            icon={<FaIcon.FaHome size={20}/>}  />
                        <SideBarItem title='Cronograma' link='./Cronog'
                            icon={<FaIcon.FaCalendar size={20}/>} />
                        <SideBarItem title='Projetos' link='./Projets'
                            icon={<FaIcon.FaToolbox size={20}/>} />
                        <SideBarItem title='Relatórios' link='./Reports' after
                            icon={<FaIcon.FaPager size={20}/>} />
                    </ul>
                </nav>
            </div>
        </div>
    </aside>
)