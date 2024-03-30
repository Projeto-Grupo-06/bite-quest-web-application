import axios from "axios";

const api = axios.create({
  baseURL: "http://52.90.122.230:8080"
})

export default api