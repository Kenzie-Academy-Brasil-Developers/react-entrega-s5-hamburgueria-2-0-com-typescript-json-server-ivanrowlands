import axios from "axios"

const api = axios.create({
    baseURL: "https://json-hamburgueria-servers.herokuapp.com",
})

export default api
