import axios from 'axios'

const api = axios.create({
    withCredentials: true,
    headers: {
        Accept: 'application/json',
    },
    baseURL: import.meta.env.VITE_BE_URL || '',
})

export default api
