import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/home";
import Reports from "../pages/reports/reports";
import Employees from "../pages/employees/employees";

import Models from "../pages/reports/types/models"

const SideBarRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Home />} />

            <Route path="/relatorios" element={<Reports />} />
            <Route path="/colaboradores" element={<Employees />} />

            <Route path="/relatorios/models" element={<Models />} />
        </Routes>
    )
}

export default SideBarRoutes;