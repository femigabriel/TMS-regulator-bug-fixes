import { api } from "."
let route = api();

const OperatorService = {
    getAll: async ()=>  {
        try {
            let { data }:any = await route.get('/operators');

            // console.log({allOperators: data?.data});

            return data?.data as Operator[];
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    getPersonnel: async (opID:number)=>  {
        try {
            let { data }:any = await route.get(`/operators/${opID}/personnel`);

            // console.log({allOperatorPersonnel: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    getRoutes: async (opID:number)=>  {
        try {
            let { data }:any = await route.get(`/operators/${opID}/routes`);

            // console.log({allOperatorRoutes: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    getFleet: async (opID:number)=>  {
        try {
            let { data }:any = await route.get(`/operators/${opID}/fleet`);

            // console.log({allOperatorFleet: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
    getDrivers: async (opID:number)=>  {
        try {
            let { data }:any = await route.get(`/operators/${opID}/drivers`);

            // console.log({allOperatorDrivers: data?.data});

            return data?.data;
        } catch (error:any) {
            console.log({errorInfo: error.response?.data || error.message})
        }

        
    },
}

export default OperatorService;