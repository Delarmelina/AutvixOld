import React, { useEffect, useState } from "react";

import { GetAns } from "../../../../services/reportMethod"

import EmpTable from "../../../employees/emptable"
import DespesasPopup from "../../popups/despesasPopup"

import * as FaIcon from "react-icons/fa";

export default function MyRDV() {

    const [tableElement, settableElement] = React.useState([]);

    React.useEffect(() => {
        getMyRdvs()
    }, [])

    async function getMyRdvs() {
        const ans = await GetAns("RDV")

        settableElement(ans.map((resp, index) => {
            const datei = resp.ans.dataInicio.split("-")
            const datef = resp.ans.dataFim.split("-")

            return (
                <tr key={index}>
                    <td>{resp.ans.document}</td>
                    <td>{resp.ans.projeto}</td>
                    <td>{resp.ans.locale}</td>
                    <td>{resp.ans.descricao}</td>
                    <td>{datei[2]}/{datei[1]}/{datei[0]} à {datef[2]}/{datef[1]}/{datef[0]}</td>
                    
                    <DespesasPopup desps={resp.ans.reembolso} doc={resp.ans.document} />
                    <td><FaIcon.FaCheck color={`${resp.ans.verificado ? "green" : "red"}`} /></td>
                    <td><FaIcon.FaMoneyBill color={`${resp.ans.reembolsado ? "green" : "red"}`} /></td>
                </tr >
            )
        }))
    }


    return (
        <>
            <h1>Meus RDV</h1>

            <EmpTable>
                <thead style={{ textAlign: 'center' }}>
                    <tr>
                        <th>Documento</th>
                        <th>Projeto</th>
                        <th>Local</th>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th><FaIcon.FaListAlt /></th>
                        <th><FaIcon.FaCheck /></th>
                        <th><FaIcon.FaMoneyBill /></th>
                    </tr>
                </thead>
                <tbody style={{ textAlign: 'center' }}>
                    {
                        tableElement
                    }
                </tbody>
            </EmpTable>
        </>

    )
}