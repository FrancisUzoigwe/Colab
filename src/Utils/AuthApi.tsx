import axios from "axios"
const url ="http://localhost:2345/api/Auth"

export const MainUser = async (data: string) => {
    try {
        const response = await axios.post(`${url}/Login`, data);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
};


export const SigninUser = async (data:string) => {
    try {
        const response = await axios.post(`${url}/sign-in`, data);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
};


export const OneMainUser = async (id: string) => {
    try {
        return await axios.get(`${url}/mainuser-info/${id}`).then((res) => {
            return res.data.data;
        });
    } catch (error) {
        console.log(error);
    }
};


