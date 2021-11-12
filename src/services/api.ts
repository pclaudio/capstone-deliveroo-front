import axios from "axios"

const api = axios.create({
    baseURL: "https://json-capstone.herokuapp.com/",
})

export default api
