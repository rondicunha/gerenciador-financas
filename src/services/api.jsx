import axios from 'axios';

const api = axios.create({
    baseURL: "https://gerenciador-financas-back.vercel.app",
});

export default api;

