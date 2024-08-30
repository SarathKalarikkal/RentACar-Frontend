import axios from 'axios';

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, 
});

export default axiosInstance;
