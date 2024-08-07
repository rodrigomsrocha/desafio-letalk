import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://letalk-desafio.up.railway.app',
})
