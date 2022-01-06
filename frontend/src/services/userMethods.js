import api from "./api";

export function login(email, password) {

    // if (!email || !password) {
    //     console.log("Email or password is empty");
    //     return Promise.reject("Email and password are required");
    // }

    return api.post("/auth/user", {
        email: email,
        password: password
    })
        .then(res => {
            api.defaults.headers.common["x-access-token"] = res.data.token
            localStorage.setItem("token", res.data.token);
            VerifyLogin()
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

export function VerifyLogin() {

    const token = localStorage.getItem("token");
    api.defaults.headers.common["x-access-token"] = token

    return api.post("/userlogged", {
        token: api.defaults.headers.common["x-access-token"] || "null"
    })
        .then(res => {
            localStorage.setItem("id", res.data.user._id)
            localStorage.setItem("name", res.data.user.name)
            localStorage.setItem("email", res.data.user.email)
            return true
        })
        .catch(err => {
            return false
        })
}