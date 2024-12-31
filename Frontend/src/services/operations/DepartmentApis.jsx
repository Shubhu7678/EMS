import { apiConnector } from "../apiConnector";
import { departmentEndPoints } from "../apis";
import toast from "react-hot-toast";

const { ADD_DEPARTMENT_API, GET_ALL_DEPARTMENT_API,GET_DEPARTMENT_BY_ID_API,UPDATE_DEPARTMENT_API,DELETE_DEPARTMENT_API } = departmentEndPoints;

export const addNewDepartment = async (token, data) => { 

    const toastId = toast.loading("Loading...");
    let result = [];
    
    try {
        
        const response = await apiConnector('POST', ADD_DEPARTMENT_API, data,
            {
                'Authorization': `Bearer ${token}`
            }
        );
        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;
        toast.success(response.data.message);

    } catch (error) { 

        console.log("Error in addNewDepartment", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}

export const getAllDepartmentList = async (token) => { 

    const toastId = toast.loading("Loading...");
    let result = [];
    try {
         
        const response = await apiConnector('GET', GET_ALL_DEPARTMENT_API, {},
            {
                'Authorization': `Bearer ${token}`
            }
        );

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) { 

        console.log("Error in getAllDepartmentList", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}

export const getDepartmentDataById = async (token, departmentId) => { 

    let result = [];
    const toastId = toast.loading('Loading...');
    try {

        const response = await apiConnector('GET', GET_DEPARTMENT_BY_ID_API + `/${departmentId}`, {},
            {
                'Authorization': `Bearer ${token}`
            }
        );

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) { 

        console.log("Error in getDepartmentDataById", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}

export const updateDepartmentData = async (token, departmentId, formData) => { 

    let result = [];
    const toastId = toast.loading('Loading...');

    try {

        const response = await apiConnector('PUT', UPDATE_DEPARTMENT_API + `/${departmentId}`, formData,
            {
                'Authorization': `Bearer ${token}`
            }
        );

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;
        toast.success(response.data.message);

    } catch (error) { 

        console.log("Error in updateDepartmentData", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}

export const deleteDepartmentData = async (token, departmentId) => { 

    const toastId = toast.loading('Loading...');
    let result = [];
    try {

        const response = await apiConnector('POST', DELETE_DEPARTMENT_API, { departmentId },
            {
                'Authorization': `Bearer ${token}`
            }
        );

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        toast.success(response.data.message);
        result = response.data.data;

    } catch (error) { 

        console.log("Error in deleteDepartmentData", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}