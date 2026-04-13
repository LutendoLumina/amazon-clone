import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL //The API (Cloud function URL)
})

export default instance;