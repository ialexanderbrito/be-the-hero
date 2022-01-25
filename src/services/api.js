import axios from 'axios';

const api = axios.create({
    baseURL: 'https://be-the-hero-oficial.herokuapp.com'
})

export default api;