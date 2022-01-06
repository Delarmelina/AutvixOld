import React from "react";
import SideBar from "../components/sidebar";
import Header from "../components/header";

import SideBarRoutes from "./routes";

export default props => {
    return (
        <>
            <Header name='Felipe Ferreira' email='Felipe.Ferreira@autvix.com.br' function='Analista de Automação Pleno' />
            <SideBar />
            <SideBarRoutes />
        </>
    );
}