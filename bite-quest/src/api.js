import axios from "axios";

const api = axios.create({
  baseURL: "http://52.55.252.220:8080"
})

export default api