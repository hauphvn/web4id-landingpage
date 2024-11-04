import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.REACT_APP_X_API_KEY
  }
})

const getAuthToken = () => {
  return localStorage.getItem('token')
}

const request = {
  get: async (url: string, params?: unknown) => {
    const token = getAuthToken()
    const response = await api.get(url, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      params
    })
    return response.data
  },

  post: async (url: string, data?: unknown) => {
    const token = getAuthToken()
    const response = await api.post(url, data, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    })
    return response.data
  },

  put: async (url: string, data?: unknown) => {
    const token = getAuthToken()
    const response = await api.put(url, data, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    })
    return response.data
  },

  delete: async (url: string, data?: unknown) => {
    const token = getAuthToken()
    const response = await api.delete(url, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      data
    })
    return response.data
  }
}
export default request
