import api from './api'

export const list = () => api.get(`/todos`)

export const insert = (data) => api.post(`/todos`, data)

export const update = (data) => api.put(`/todos`, data)

export const remove = (id) => api.delete(`/todos/${id}`)