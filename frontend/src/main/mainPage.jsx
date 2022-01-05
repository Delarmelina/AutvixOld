import React from "react";
import SideBar from "../components/sidebar";

import SideBarRoutes from "./routes";

export default props => {
    return (
        <div>
            <SideBar />

            <div className='content-wrapper'>
                
                <SideBarRoutes />
                {/* <section className='content'>
                    <div className='content-fluid'>
                        <h1>Lorem Ipssun</h1>
                    </div>
                </section> */}
            </div>

        </div>
    );
}