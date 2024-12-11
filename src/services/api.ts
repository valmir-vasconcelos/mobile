import axios from "axios";

export const api = axios.create({
    //baseURL: "http://192.168.3.29:3333",
    baseURL: "http://10.128.160.164:3333",
    //baseURL: "http://localhost:3333",
    timeout: 700,
});
