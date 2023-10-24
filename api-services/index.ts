import axios from "axios";


export const baseURL = 'https://demo.covlie.com';

export const api = (baseURI?:string, contentType?:string)=> {
    return axios.create({
        baseURL: baseURI || baseURL,
        // headers: {
        //     "Content-Type": contentType || "application/json",
        //     Authorization: `Bearer ${data?.userToken}`,
        // },
    });
}
