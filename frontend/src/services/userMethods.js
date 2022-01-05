import api from "./api";

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

export function getUserList() {
    return api.get("/users")
        .then(res => {
            return res.data.users
        })
        .catch(err => {
            return err
        })
}

export function VerifyToken() {
    api.get("/verifytoken")
        .then(res => {
            console.log("Token Encontrado")
            return true
        })
        .catch(err => {
            console.log("Token Invalido")
            return false
        })
}

export function Teste() {
    return api.post("/userlogged", {
        token: api.defaults.headers.common["x-access-token"] || "null"
    })
        .then(res => {
            localStorage.setItem("id", res.data.user._id)
            localStorage.setItem("name", res.data.user.name)
            localStorage.setItem("email", res.data.user.email)
            localStorage.setItem("isLogged", "true")
        })
        .catch(err => {
            localStorage.setItem("isLogged", "false")
            return err
        })
}