import axios from "axios";

const api = axios.create({
  baseURL: "http://54.152.3.124:8080"
})

export default api