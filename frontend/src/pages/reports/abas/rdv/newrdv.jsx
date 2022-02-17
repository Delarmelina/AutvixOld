import React, { useState, useEffect } from "react";

import FormModel from "../../../../components/forms/formModel"
import FormField from "../../../../components/forms/formField"

import * as FaIcon from "react-icons/fa";

import { AddAns } from '../../../../services/reportMethod'

export default function NewRDV() {

    const user = JSON.parse(localStorage.getItem("user"))

    const [total, setTotal] = useState(0)
    const [form, setForm] = useState({
        rn: `-RDV--A-${user.abrev}`,
        type: "RDV",
        name: user.name + " " + user.surname,
        cc: "",
        client: "",
        desc: "",
        locale: "",
        num: "000",
        datai: "",
        dataf: "",
        desps: [
            { id: 1, desp: "", date: "", desc: "", value: "" },
            { id: 2, desp: "", date: "", desc: "", value: "" },
            { id: 3, desp: "", date: "", desc: "", value: "" }
        ]
    })

    useEffect(() => {
        setForm({ ...form, rn: `${form.cc}-RDV-${form.num.length === 0 ? "000" : form.num.length === 1 ? `00${form.num}` : form.num.length === 2 ? `0${form.num}` : `${form.num}`}-A-${user.abrev}` })
    }, [form.cc, form.num])

    const [element, setE] = useState()
    useEffect(() => {
        setE(form.desps.map((item, index) => {
            return <tr key={index}>
                <th style={{ padding: "0px" }}>
                    <input type="text" value={form.desps[index].desp} onChange={e => changeForm(e, index, "desp")}
                        style={{ height: "10px", padding: "10px", backgroundColor: "transparent", color: "white", border: "none" }} />
                </th>
                <th style={{ padding: "0px" }}>
                    <input type="text" value={form.desps[index].date} onChange={e => changeForm(e, index, "date")}
                        style={{ height: "10px", padding: "10px", backgroundColor: "transparent", color: "white", border: "none" }} />
                </th>
                <th style={{ padding: "0px" }}>
                    <input type="text" value={form.desps[index].desc} onChange={e => changeForm(e, index, "desc")}
                        style={{ height: "10px", padding: "10px", backgroundColor: "transparent", color: "white", border: "none" }} />
                </th>
                <th style={{ padding: "0px" }}>
                    <input type="number" value={form.desps[index].value} onChange={e => changeForm(e, index, "value")}
                        style={{ height: "10px", padding: "10px", backgroundColor: "transparent", color: "white", border: "none", textAlign:"center" }} />
                </th>
            </tr>
        }))
    }, [form])

    useEffect(() => {
        let t = 0
        form.desps.map(desp => {
            if (desp.value === "" || desp.value === "0") {
                return t = parseFloat(t)
            } else {
                return t = t + parseFloat(desp.value)
            }
        })
        setTotal(t)
    }, [form])

    function changeForm(e, index, item) {
        let it = { ...form };

        if (item === "desp") it.desps[index].desp = e.target.value
        if (item === "desc") it.desps[index].desc = e.target.value
        if (item === "value") it.desps[index].value = e.target.value
        if (item === "date") it.desps[index].date = e.target.value

        setForm(it);
    }

    function addItem() {
        setForm({ ...form, desps: [...form.desps, { id: form.desps.length + 1, desp: "", date:"", desc: "", value: "" }] })
    }

    function removeItem() {
        let it = [...form.desps]
        it.pop()
        setForm({...form, desps:it})
    }

    return (
        <>
            <div className="row ml-1 mr-1 p-2"
                style={{
                    textAlign: "center", color: "#cccccc",
                    borderRadius: "10px 10px 0px 0px", backgroundColor: "#FFFFFF22"
                }}>
                <h5>{form.rn}</h5>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <FormModel>
                        <FormField type="text" title="Nome" disabled value={form.name} setValue={e => setForm({ ...form, name: e.target.value })} />
                        <FormField type="text" title="Centro de Custo" value={form.cc} setValue={e => setForm({ ...form, cc: e.target.value })} />
                        <FormField type="text" title="Cliente" value={form.client} setValue={e => setForm({ ...form, client: e.target.value })} />
                        <FormField type="text" title="Descrição" value={form.desc} setValue={e => setForm({ ...form, desc: e.target.value })} />
                        <FormField type="text" title="Local" value={form.locale} setValue={e => setForm({ ...form, locale: e.target.value })} />
                        <FormField type="text" title="Número do RDV" value={form.num} setValue={e => setForm({ ...form, num: e.target.value })} />
                        <FormField type="date" title="Data de Início" value={form.datai} setValue={e => setForm({ ...form, datai: e.target.value })} />
                        <FormField type="date" title="Data Final" value={form.dataf} setValue={e => setForm({ ...form, dataf: e.target.value })} />
                    </FormModel>
                </div>
                <div className="col-md-6">
                    <div style={{ textAlign: "center" }} className="p-2 border"><h5>Despesas e Adiantamentos</h5></div>
                    <FormModel tam="440">
                        {/* <div className="card">
                            <div className="card-body"> */}
                        <table className="table table-bordered table-sm" style={{ fontSize: "1.4em", textAlign: "center" }}>
                            <thead>
                                <tr style={{ fontSize: "1.4em", textAlign: "center" }}>
                                    <th style={{ width: "20%" }}>Despesa</th>
                                    <th style={{ width: "20%" }}>Data</th>
                                    <th style={{ width: "55%" }}>Descrição</th>
                                    <th style={{ width: "20%" }}>R$</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    element
                                }
                            </tbody>
                        </table>
                        {/* </div>
                        </div> */}
                    </FormModel>
                    <div className="">
                        <button style={{ height: "40px", borderRadius: "10px" }} className="btn btn-success m-0 col-md-6"
                            onClick={() => { addItem() }}>Add</button>
                        <button style={{ height: "40px", borderRadius: "10px" }} className="btn btn-danger  m-0 col-md-6"
                            onClick={() => { removeItem() }}>Remove</button>
                    </div>
                    <div className="mt-3 row pl-2 pr-2 pt-2" style={{ textAlign: "center", justifyContent: "end" }}>
                        <div className="col-md-8 p-2" style={{ border: "3px solid #333" }}> <h3>Total</h3> </div>
                        <div className="col-md-4 p-2" style={{ border: "3px solid #333" }}><h3>R$ {total}</h3> </div>
                    </div>
                </div>
            </div>


            <button type='button' className="btn btn-block btn-success ml-3 mt-2 float-sm-right" style={{ width: '200px ' }}
                onClick={() => AddAns(form)}>
                <FaIcon.FaCheck className="mr-3 mb-1" />
                <span>Enviar Relatório</span>
            </button>

            <button type='button' className="btn btn-block btn-danger float-sm-right" style={{ width: '200px ' }}
                onClick={() => {}}>
                <FaIcon.FaEraser className="mr-3 mb-1" />
                <span>Cancelar Relatório</span>
            </button>
        </>
    )
}