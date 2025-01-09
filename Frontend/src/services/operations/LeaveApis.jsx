import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector";
import { employeeLeaveEndPoints } from '../apis';
import axios from "axios";

const { EMPLOYEE_ADD_LEAVE_API,
    GET_EMPLOYEE_LEAVES_API,
    GET_ALL_LEAVES_API,
    GET_LEAVE_DATA_BY_ID_API,
    CHANGE_LEAVE_STATUS_API,
    GET_EMPLOYEE_LEAVES_BY_EMPLOYEE_ID_API,
} = employeeLeaveEndPoints;

export const employeeAddLeave = async (token, data) => {

    const toastId = toast.loading('Loading');
    let result = [];
    try {

        const response = await apiConnector('POST', EMPLOYEE_ADD_LEAVE_API, data,
            {
                'Authorization': `Bearer ${token}`
            }
        )

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.data;
        toast.success(response.data.message);

    } catch (error) {

        console.log("Error in employeeAddLeave handler function", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}

export const getEmployeeLeaves = async (token, userId) => {

    let result = [];
    const toastId = toast.loading('Loading...');
    try {

        const response = await axios.get(GET_EMPLOYEE_LEAVES_API + `/${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) {

        console.log("Error in getEmployeeLeaves", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result
}

export const getAllLeaves = async (token) => {

    let result = [];
    const toastId = toast.loading('Loading...');
    try {

        const response = await axios.get(GET_ALL_LEAVES_API, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) {

        console.log("Error in getAllLeaves", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}

export const getLeaveDataById = async (token, leaveId) => {

    let result = [];
    const toastId = toast.loading('Loading...');
    try {

        const response = await axios.get(GET_LEAVE_DATA_BY_ID_API + `/${leaveId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) {

        console.log("Error occured in getLeaveDataById", error);
    }

    toast.dismiss(toastId);
    return result;
}

export const changeLeaveStatus = async (token, formData) => {

    const toastId = toast.loading('Loading...');
    let result = [];
    try {

        const response = await axios.post(CHANGE_LEAVE_STATUS_API, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        if (!response.data.success) {

            throw new Error(response.data.message);

        }

        result = response.data.data;
    } catch (error) {

        console.log("Error occured in changeLeaveStatus", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}

export const getEmployeeLeavesByEmployeeId = async (token, employeeId) => {

    let result = [];
    const toastId = toast.loading('Loading...');

    try {

        const response = await axios.get(GET_EMPLOYEE_LEAVES_BY_EMPLOYEE_ID_API + `/${employeeId}`, {
            headers: {

                Authorization: `Bearer ${token}`
            }
        })

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) {

        console.log("Error occured in getEmployeeLeavesByEmployeeId", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}