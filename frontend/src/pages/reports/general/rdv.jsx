import React from "react";

import Content from "../../../components/layout/content"

import ReportPrincipal from "../layout/principal";
import CardHeader from "../layout/cardHeader";
import CardBody from "../layout/cardBody"
import Aba from "../layout/aba"

import NewRDV from "../abas/rdv/newrdv"
import MyRDV from "../abas/rdv/myrdvs"
import RDVAprov from "../abas/rdv/rdvsaprov"

export default function RDV() {

    const abas = [
        ['Meus RDVs', 'myrdvs', "","active"],
        ['Novo RDV', 'newrdv', ""],
        ['RDVs pendentes', 'rdvpen', ["Financeiro","Planejamento"]],
    ]

    return (
        <Content title='Relatórios - Relatório de Viagem' >
            <ReportPrincipal>
                <CardHeader abas={abas} />

                <CardBody>
                    <Aba teste="newrdv">
                        <NewRDV />
                    </Aba>
                    <Aba teste="myrdvs" active>
                        <MyRDV />
                    </Aba>
                    <Aba teste="rdvpen">
                        <RDVAprov />
                    </Aba>
                </CardBody>
            </ReportPrincipal>
        </Content>
    )
}