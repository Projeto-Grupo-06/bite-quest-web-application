import axios from "axios";

const api = axios.create({
  baseURL: "http://34.231.230.215:80/api"
})

export default api