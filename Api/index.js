import axios from "axios";
import { environment } from "../constants";

axios.defaults.baseURL = 'http://10.0.2.2:8000/api';
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 10000;

// let token = localStorage.getItem("token");
// if (token) {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// }

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    refreshToken: (token) => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
    },
};

export default http;