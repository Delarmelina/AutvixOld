import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/home";
import Reports from "../pages/reports/reports";
import Employees from "../pages/employees/employees";

import RDV from "../pages/reports/general/rdv"

const SideBarRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Home />} />

            <Route path="/relatorios" element={<Reports />} />
            <Route path="/colaboradores" element={<Employees />} />

            <Route path="/relatorios/rdv" element={<RDV />} />
        </Routes>
    )
}

export default SideBarRoutes;