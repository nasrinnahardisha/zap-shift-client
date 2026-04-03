import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://zap-ship-server-delta.vercel.app'
})

const UseAxios = () => {
    return axiosInstance;
};

export default UseAxios;