import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3010/sendMessage',
  });

export const postDataAPI = {
    sendMessage: (name, mail, message) => {
        return axiosInstance.post(``,{
            name,
            mail,
            message,
        })
    }
};