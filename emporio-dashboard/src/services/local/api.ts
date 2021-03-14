import axios from "axios"

const baseApiURL = "http://192.168.15.5:4000"

const api = axios.create({
    baseURL: baseApiURL
})

export default api