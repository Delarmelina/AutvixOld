import api from "./api";

export async function GetList(listName) {

    let list = await api.post("/lists/getList", {
        name: listName,
    })

    return list.data.list.items
}