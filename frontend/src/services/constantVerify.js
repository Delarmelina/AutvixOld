import api from './api'

import { VerifyLogin } from './userMethods'

function VerifyifLogged() {
    VerifyLogin().then(res => {
        if (!res) {
            if (window.location.pathname !== '/login') {
                window.location.href = '/login'
            }
            console.log('nao logado')
        }else{
            console.log('logged')
        }
    })
}

setInterval(VerifyifLogged, 30000)