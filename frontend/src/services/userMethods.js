import api from "./api";

export function login(email, password) {

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
            localStorage.setItem('user', JSON.stringify(res.data.user));
            return true
        })
        .catch(err => {
            localStorage.setItem('user', JSON.stringify({}));
            return false
        })
}

export function VerifyTag(tag) {

    const token = localStorage.getItem("token");
    api.defaults.headers.common["x-access-token"] = token

    return api.post("/verifytag", {
        token: api.defaults.headers.common["x-access-token"] || "null",
        tag: tag
    })
        .then(res => {
            return res.data.res
        })
        .catch(err => {
            return err
        })
}

export function DeleteUser(id) {

    api.post("/auth/delete", {
        id: id
    })
}

export function UpdateUser(user, tags) {

    const date = user.born.split('/')
    const bornDate = `${date[2]}-${date[1]}-${date[0]}T00:00:01.000+00:00`

    user = { ...user, tags: tags, born: bornDate }

    api.post("/auth/update", {
        _id: user._id,
        id: user.id,
        name: user.name,
        surname: user.surname,
        adress: user.adress,
        email: user.email,
        born: user.born,
        telephone: user.telephone,
        office: user.office,
        department: user.department,
        tags: user.tags
    })
}

export function CreateUser(user, tags) {

    const date = user.born.split('/')
    const bornDate = `${date[2]}-${date[1]}-${date[0]}T00:00:01.000+00:00`

    user = { ...user, tags: tags, born: bornDate }

    api.post("auth/register", {
        id: user.id,
        name: user.name,
        surname: user.surname,
        adress: user.adress,
        email: user.email,
        born: user.born,
        telephone: user.telephone,
        office: user.office,
        department: user.department,
        tags: user.tags,
        password: user.password,
        confirmpassword: user.confirmpassword
    })
}