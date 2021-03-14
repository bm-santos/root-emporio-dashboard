import { ProductArray } from "../../stores/ducks/product/types";
import api from "./api";

export const UserService = {
    login: (request: any[]) => api.post('/login', request),
    getUser: (id: any) => api.get(`/users/${id}`),

    getList: () => api.get('/users?role=admin&role=editor'),

    new: (data: any[]) => api.post('/users', data),
    delete: (id: any) => api.delete(`/users/${id}`),
}

export const ProductService = {
    getList: () => api.get('/beers', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }),
    new: (data: ProductArray[]) => api.post('/beers', data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }),
    delete: (id: any) => api.delete(`/beers/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }),
}