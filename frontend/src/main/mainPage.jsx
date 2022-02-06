import React from "react";
import SideBar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

import SideBarRoutes from "./routes";

function MainPage() {

    localStorage.setItem("lastPage", window.location.pathname);

    return (
        <div className={`${ localStorage.getItem('darkmode') == 'true' ? 'dark-mode' : '' }`}  >
            <Header />
            <SideBar />
            <SideBarRoutes />
            <Footer className="layout-footer-fixed"/>
        </div>
    );
}

export default MainPage