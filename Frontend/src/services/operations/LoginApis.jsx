
import { apiConnector } from '../apiConnector';
import { authEndPoints } from '../apis';
import toast from 'react-hot-toast';

const { LOGIN_API } = authEndPoints;

export const LoginForm = async(data) => {

    const toastId = toast.loading("Loading...");
    let result = [];
    console.log("LOGIN API ::::",LOGIN_API);
    try {

        const response = await apiConnector('POST', LOGIN_API, data);

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }
          
        console.log(response);
        // result = response.data.data;
    } catch (error) { 

        console.log("Error in Login", error);
    }

    toast.dismiss(toastId);
    return result;
}