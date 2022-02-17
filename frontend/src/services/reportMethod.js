import api from "./api";

export function AddAns(form) {

    const token = localStorage.getItem("token");
    api.defaults.headers.common["x-access-token"] = token

    api.post("/report/add", {
        type: form.type,
        name: form.name,
        token: api.defaults.headers.common["x-access-token"] || "null",
        ans: {
            document: form.rn ? form.rn : null,
            dataInicio: form.datai ? form.datai : null,
            dataFim: form.dataf ? form.dataf : null,
            projeto: form.cc ? form.cc : null,
            client: form.client ? form.client : null,
            locale: form.locale ? form.locale : null,
            descricao: form.desc ? form.desc : null,
            reembolso: form.desps ? form.desps : null,                
            enviado: true,
            reanalise: false,
            verificado: false,
            reembolsado: false
        }
    })
}

export async function GetAns(type) {
    const token = localStorage.getItem("token");
    api.defaults.headers.common["x-access-token"] = token

    let ans = await api.post("/report/get", {
        token: api.defaults.headers.common["x-access-token"] || "null",
        type: type,
    })

    return await ans.data.resp
}

export async function GetAllAns(type) {

    let ans = await api.post("report/get/all", {
        type: type
    })

    return await ans.data.resp
}