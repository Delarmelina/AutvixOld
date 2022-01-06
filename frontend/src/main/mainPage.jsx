import React from "react";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import Footer from "../components/footer";

import SideBarRoutes from "./routes";

function MainPage() {
    return (
        <div className={`${ localStorage.getItem('darkmode') == 'true' ? 'dark-mode' : '' }`}  >
            <Header />
            <SideBar />
            <SideBarRoutes />
            <Footer />
        </div>
    );
}

export default MainPage