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
        ['Novo RDV', 'newrdv'],
        ['Meus RDVs', 'myrdvs'],
        ['RDVs pendentes', 'rdvpen'],
    ]

    return (
        <Content title='Relatórios - Relatório de Viagem' >
            <ReportPrincipal>
                <CardHeader abas={abas} />

                <CardBody>
                    <Aba teste="newrdv" active>
                        <NewRDV />
                    </Aba>
                    <Aba teste="myrdvs">
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