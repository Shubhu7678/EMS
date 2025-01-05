import { apiConnector } from "../apiConnector";
import toast from 'react-hot-toast';

import { salaryEndPoints } from "../apis";

const { GET_ALL_EMPLOYEE_LIST_BY_DEPARTMENT_ID_API,ADD_SALARY_DATA_API } = salaryEndPoints;

export const getAllEmployeesByDepartmentId = async(token,departmentId) => { 

    let result = [];
    try {
         console.log(GET_ALL_EMPLOYEE_LIST_BY_DEPARTMENT_ID_API + `/${departmentId}`);
        const result = await apiConnector('GET', GET_ALL_EMPLOYEE_LIST_BY_DEPARTMENT_ID_API + `/${departmentId}`, {},
            {
                'Authorization': `Bearer ${token}`
            }
        );

        if (!result.data.success) { 

            throw new Error(result.data.message);
        }

        return result.data.data;

    } catch (error) { 

        console.log("Error in getAllEmployeesByDepartmentId", error);

    }

    return result;
}

export const addSalaryData = async (token, data) => { 

    let result = [];
    const toastId = toast.loading('Loading...');
    try {

        const response = await apiConnector('POST', ADD_SALARY_DATA_API, data,
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

        console.log("Error occured in Add Salary:", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}