import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";

import SideBar from "../components/sidebar";

export default props => {
    return (
        <div>
            <SideBar />

            <div className='content-wrapper'>
                <Routes>
                    <Route path="*" element={<h1>Home</h1>} />

                    <Route path="/relatorios" element={<h1>Relatórios</h1>} />
                    <Route path="/colaboradores" element={<h1>Colaboradores</h1>} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>

                <section className='content'>
                    <div className='content-fluid'>
                        <h1>Lorem Ipssun</h1>
                    </div>
                </section>
            </div>

        </div>
    );
}