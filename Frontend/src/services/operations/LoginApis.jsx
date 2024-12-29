
import { apiConnector } from '../apiConnector';
import { authEndPoints } from '../apis';
import toast from 'react-hot-toast';
import { setToken } from '../../slices/authSlice';
import { setUser } from '../../slices/profileSlice';

const { LOGIN_API } = authEndPoints;

export const LoginForm = async(data,dispatch,navigate,reset) => {

    const toastId = toast.loading("Loading...");
    
    console.log("LOGIN API ::::",LOGIN_API);
    try {

        const response = await apiConnector('POST', LOGIN_API, data);

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }
          
        console.log(response);
        // result = response.data.data;
        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('user', JSON.stringify(response.data.data));
       
        dispatch(setToken(response.data.token));
        dispatch(setUser(response.data.data));
        reset();
        navigate('/dashboard/admin-dashboard');
        toast.success(response.data.message);

    } catch (error) { 

        console.log("Error in Login", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
}

export const logout = (navigate, dispatch) => {
    
  const toastId = toast.loading("Loading...");
  dispatch(setUser(null));
  dispatch(setToken(null));
  localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success("Logout Successfully");
    toast.dismiss(toastId);
  setTimeout(() => navigate('/login'), 0);

};