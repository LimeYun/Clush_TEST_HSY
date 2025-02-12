import api from './api'

export const list = () => api.get(`/todos`)

export const update = (id) => api.get(`/todos/${id}`)

export const remove = (id) => api.delete(`/todos/${id}`)