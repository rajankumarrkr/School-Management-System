import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://65.1.114.241/api",
});

// Attach token automatically
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`; // 🔥 IMPORTANT
    }
    return req;
});

export default API;