import api from "./api";

const token = localStorage.getItem("token")

const headers = {
    headers: {
        'Authorization': `Bearer ${token}`
    }
}

export const UserService = {
    login: (request: any[]) => api.post('/login', request),
    getUser: (id: any) => api.get(`/users/${id}`),

    getList: () => api.get('/users?role=admin&role=editor', headers),

    new: (data: any[]) => api.post('/users', data, headers),
    delete: (id: any) => api.delete(`/users/${id}`, headers),
}

export const ProductService = {
    getList: () => api.get('/beers', headers),
    new: (data: any[]) => api.post('/beers', data, headers),
    delete: (id: any) => api.delete(`/beers/${id}`, headers),
}