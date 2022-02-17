import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.27.30.229:3003/',
});

export default api;