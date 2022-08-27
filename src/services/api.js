import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bethehero-api.ialexanderbrito.dev'
})

export default api;
