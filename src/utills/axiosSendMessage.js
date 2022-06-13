import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://nodejsserverandreichaus.herokuapp.com/sendMessage',
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