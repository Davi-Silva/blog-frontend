import axios from "axios";

const api = axios.create({
    baseURL: "https://course-backend.herokuapp.com"
});

export default api;