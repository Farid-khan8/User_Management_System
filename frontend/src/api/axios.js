import axios from "axios";
import { toastEmitter } from "../utils/toastEmitter";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

api.interceptors.response.use(
    (response) => {
        if (response.config.method !== "get") {
            toastEmitter.emit("success", "Action successful");
        }
        return response;
    },
    (error) => {
        toastEmitter.emit(
            "error",
            error.response?.data?.message || "Something went wrong"
        );
        return Promise.reject(error);
    }
);

export default api;
