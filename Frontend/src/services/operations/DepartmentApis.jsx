import { apiConnector } from "../apiConnector";
import { departmentEndPoints } from "../apis";
import toast from "react-hot-toast";

const { ADD_DEPARTMENT_API, GET_ALL_DEPARTMENT_API } = departmentEndPoints;

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