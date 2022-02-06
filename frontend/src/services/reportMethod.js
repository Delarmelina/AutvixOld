import api from "./api";

export function AddAns(form) {

    api.post("/report/add", {
        type: form.type,
        name: form.name,
        ans: {
            document: form.rn,
            dataInicio: form.datai,
            dataFim: form.dataf,
            projeto: form.cc,
            client: form.client,
            locale: form.locale,
            descricao: form.desc,
            // reembolsos: [["uber", "350"], ["taxi", "550"]],
            reembolsado: true,
            verificado: false
        }
    })
}