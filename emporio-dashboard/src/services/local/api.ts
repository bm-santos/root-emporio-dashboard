import axios from "axios"

const baseApiURL = "http://localhost:4000"

const api = axios.create({
    baseURL: baseApiURL
})

export default api