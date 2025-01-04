import { apiConnector } from "../apiConnector";

import { salaryEndPoints } from "../apis";

const { GET_ALL_EMPLOYEE_LIST_BY_DEPARTMENT_ID_API } = salaryEndPoints;

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