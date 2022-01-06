import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/home/home";
import Reports from "../pages/reports/reports";
import Employees from "../pages/employees/employees";

const SideBarRoutes = () => {
    return (
        <div className="content-wrapper">
            <Routes>
                <Route path="*" element={<Home />} />

                <Route path="/relatorios" element={<Reports />} />
                <Route path="/colaboradores" element={<Employees />} />
            </Routes>
        </div>
    )   
}

export default SideBarRoutes;