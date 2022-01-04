import React from "react";

import * as FaIcon from "react-icons/fa";

import SideBarItem from '../components/sidebarItem'

export default props => (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
            <a href="#" className="brand-link">
                <FaIcon.FaCompass size={28} alt="AdminLTE Logo" className="brand-image" style={{ opacity: '.8' }} />
                <span className="ml-2 brand-text font-weight-light">Autvix Engenharia</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <FaIcon.FaUser size={50} color="white" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block h4">Felipe Ferreira</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                        <SideBarItem 
                            title='Home'
                            link='/'
                            icon={<FaIcon.FaToolbox size={20}/>}/>
                        <SideBarItem 
                            title='Relatórios' 
                            link='Relatorios'
                            icon={<FaIcon.FaToolbox size={20}/>}/>
                        <SideBarItem 
                            title='Colaboradores' 
                            icon={<FaIcon.FaToolbox size={20}/>}/>
                    </ul>
                </nav>
            </div>
        </div>
    </aside>
)
