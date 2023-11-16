import axios from "axios"
const pitchbookAPI = axios.create({
  baseURL: "https://pitchbook.com/products/direct-access-data",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
