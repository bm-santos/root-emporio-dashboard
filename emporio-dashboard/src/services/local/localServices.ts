import api from "./api";

export const UserService = {
    login: (request: any[]) => api.post('/login', request),
    getUser: (id: any) => api.get(`/users/${id}`),

    getList: () => api.get('/users?role=admin&role=editor'),

    new: (request: any[]) => api.post('/register', request),
}

export const ProductService = {
    getList: (headers: any) => api.get('/beers', headers)
}