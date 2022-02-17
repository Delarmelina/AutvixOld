import React, { useState, useEffect } from "react";

import * as FaIcon from "react-icons/fa";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function DespesasPopup(props) {

    const [element, setElement] = useState()
    const [valueSomed, setValueSomed] = useState(parseFloat(0))

    useEffect(() => {
        setElement(
            props.desps.map((desp, index) => {
                if (desp.desp)
                return <tr key={`${index}-s`}>
                    <th>{desp.desp}</th>
                    <th>{desp.date}</th>
                    <th>{desp.desc}</th>
                    <th style={{ width: "30%" }}><span>R$ {desp.value ? desp.value : "00"}</span></th>
                </tr>
            })
        )
    }, [])

    useEffect(() => {
        let t = 0
        props.desps.map(desp => {
            if (desp.value === "" || desp.value === "0") {
                return t = parseFloat(t)
            } else {
                return t = t + parseFloat(desp.value)
            }
        })
        setValueSomed(t)
    }, [element])

    return (
        <Popup
            trigger={
                <td><FaIcon.FaListAlt /></td>
            }
            modal
        >
            {close => (
                <div className="fullPop" style={{ background: '#454D55' }}>
                    <div className="header">{props.doc}</div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body table-responsive" style={{ maxHeight: '450px', background: '#454D55' }}>
                                    <form>
                                        <table className="table table-bordered table-sm" style={{ fontSize: "1.1em", textAlign: "center", width: "100%" }}>
                                            <thead>
                                                <tr style={{ fontSize: "1.1em", textAlign: "center" }}>
                                                    <th style={{ width: "20%" }}>Despesa</th>
                                                    <th style={{ width: "20%" }}>Data</th>
                                                    <th style={{ width: "45%" }}>Descrição</th>
                                                    <th style={{ width: "15%" }}>R$</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    element
                                                }
                                            </tbody>
                                        </table>

                                        <div className="mt-3 row pl-2 pr-2 pt-2" style={{ color:"black", textAlign: "center", justifyContent: "end" }}>
                                            <div className="col-md-8 p-2" style={{ border: "3px solid #000", backgroundColor:"gray" }}> <h3>Total</h3> </div>
                                            <div className="col-md-4 p-2" style={{ border: "3px solid #000", backgroundColor:"gray" }}><h3>R$ {valueSomed}</h3> </div>
                                        </div>

                                        <input type="submit" onSubmit={null} onClick={() => {
                                            close()
                                        }} hidden />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Popup>
    )
}

export default DespesasPopup;