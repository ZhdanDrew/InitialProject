import axios from "axios";

// API
export const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});
