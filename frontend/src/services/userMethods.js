import api from "./api";

export function getUserList() {
    return api.get("/users")
        .then(res => {
            return res.data.users
        })
        .catch(err => {
            return err
        })
}

export function login(email, password) {
    return api.post("/auth/user", {
        email: email,
        password: password
    })
        .then(res => {
            api.defaults.headers.common["x-access-token"] = res.data.token
            return res.data
        })
        .catch(err => {
            console.log(err)
            return err
        })
}