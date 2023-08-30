import axios from 'axios'

const api = axios.create({
    withCredentials: true,
    headers: {
        Accept: 'application/json',
    },
    baseURL: `${process.env.REACT_APP_BE_URL}`,
})

export default api
