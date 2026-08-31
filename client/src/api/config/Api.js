import axios from 'axios'

// When VITE_BE_URL is unset the client uses relative URLs, which the Vite dev
// server proxies to the backend (see vite.config.js). In production the value is
// baked in at build time.
const api = axios.create({
    withCredentials: true,
    headers: {
        Accept: 'application/json',
    },
    baseURL: import.meta.env.VITE_BE_URL || '',
})

export default api
