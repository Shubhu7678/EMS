import axios from "axios";
import toast from "react-hot-toast";
import { SettingEndPoints,DashboardEndPoints } from "../apis";

const { CHANGE_PASSWORD_API } = SettingEndPoints;
const { GET_DASHBOARD_OVERVIEW_API } = DashboardEndPoints;
export const changePassword = async (token, data) => {

    let result = [];
    const toastId = toast.loading('Loading...');
    try {

        const response = await axios.post(CHANGE_PASSWORD_API, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.success;
        toast.success(response.data.message);
    } catch (error) {

        console.log("Error in changing password", error);
        toast.error(error.response.data.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const getDashboardOverview = async (token) => { 

    let result = [];
    const toastId = toast.loading('Loading...');
    try {

        const response = await axios.get(GET_DASHBOARD_OVERVIEW_API, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data;

    } catch (error) { 

        console.log("Error in getDashboardOverview", error);
    }
    toast.dismiss(toastId);
    return result;
}