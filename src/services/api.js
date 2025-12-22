import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_APPSCRIPT_URL,
  timeout: 10000, // Waktu tunggu dalam milidetik
})

export default api