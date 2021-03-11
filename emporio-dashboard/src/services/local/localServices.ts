import api from "./api";

export const UserService = {
    new: (request: any[]) => api.post('/register', request),
    login: (request: any[]) => api.post('/login', request),
    getInfo: (id: any) => api.get(`/users/${id}`),

}

export default UserService