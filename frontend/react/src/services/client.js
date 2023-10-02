import axios from 'axios';

export const getCustomers= async ()=>{
    // eslint-disable-next-line no-useless-catch
    try {
       return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/customers`);
    }
    catch (error) {
       throw  error;
    }
}
export const saveCustomer= async (customer)=> {
    // eslint-disable-next-line no-useless-catch
    try {
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/customers`,
            customer);
    } catch (error) {
        throw error;
    }
}
export const deleteCustomer= async (id)=> {

    try {
        return await axios.delete(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/customers/${id}`
        );
    } catch (error) {
        throw error;
    }
}

export  const updateCustomer= async (id,update)=> {
    try {
        return await axios.put(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/customers/${id}`,
            update
        );
    } catch (error) {
        throw error;
    }
}
export  const login= async (usernameAndPassword)=> {
    try {
        return await axios.put(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/login`,
       usernameAndPassword
        );
    } catch (error) {
        throw error;
    }
}
