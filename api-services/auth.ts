import { api } from "."
let route = api();

const AuthService = {
    createRegulator: async (formData:Regulator)=> {
        try {
            let { data }:any = await route.post('/regulators', formData);

            console.log({kreateRegulator: data});

            return data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },

    signRegulator: async (formData:Regulator)=> {
        try {
            let { data }:any = await route.post('/regulators/login', formData);

            // console.log({signRegulator: data?.data});
            sessionStorage.setItem("regulator", JSON.stringify(data?.data));

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },

    getAllRegulators: async ()=> {
        try {
            let { data }:any = await route.get('/regulators');

            console.log({allRegulators: data});

            return data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
}

export default AuthService;