import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector";
import { employeeLeaveEndPoints } from '../apis';

const { EMPLOYEE_ADD_LEAVE_API } = employeeLeaveEndPoints;

export const employeeAddLeave = async (token, data) => { 

    const toastId = toast.loading('Loading');
    let result = [];
    try {
        
        const response = await apiConnector('POST', EMPLOYEE_ADD_LEAVE_API, data,
            {
                'Authorization' : `Bearer ${token}`
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