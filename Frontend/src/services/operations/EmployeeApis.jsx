
import { apiConnector } from '../apiConnector';
import { employeeEndPoints} from '../apis';
import toast from 'react-hot-toast';

const { ADD_EMPLOYEE_API,
    GET_ALL_EMPLOYEE_LIST_API,
    GET_EMPLOYEE_DATA_BY_ID_API,
    UPDATE_EMPLOYEE_DATA_API,
    DELETE_EMPLOYEE_DATA,
    GET_EMPLOYEE_DATA_BY_USER_ID_API,
} = employeeEndPoints;
export const addEmployeeData = async(formData, token) => { 

    let result = [];
    const toastId = toast.loading('Loading...')
    try {

        const response = await apiConnector('POST', ADD_EMPLOYEE_API, formData,
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

        toast.error(error.response.data.message);
        console.log("Error in add Employee Data", error);
        
    }

    toast.dismiss(toastId);
    return result;

}

export const getAllEmployeeList = async (token) => { 

    let result = [];
    const toastId = toast.loading('Loading...')
    try {

        const response = await apiConnector('GET', GET_ALL_EMPLOYEE_LIST_API, {},
            {
                'Authorization': `Bearer ${token}`
            }
        )

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) { 

        console.log("Error in get All Employee List", error);
        toast.error(error.response.data.message);

    }

    toast.dismiss(toastId);
    return result;

}

export const getEmployeeDataById = async (token, employeeId) => {
 
    let result = [];
    const toastId = toast.loading('Loading...')

    try {

        const response = await apiConnector('GET', GET_EMPLOYEE_DATA_BY_ID_API + `/${employeeId}`, {},
            {
                'Authorization': `Bearer ${token}`
            }
        )
        
        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) { 

        console.log("Error in get Employee Data By Id", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;

}

export const updateEmployeeData = async (formData, token, employeeId) => { 

    const toastId = toast.loading('Loading...')
    let result = [];
    try {

        const response = await apiConnector('PUT', UPDATE_EMPLOYEE_DATA_API + `/${employeeId}`, formData,
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

        console.log("Error in update Employee Data", error);
        toast.error(error.response.data.message);

    }

    toast.dismiss(toastId);
    return result;
}

export const deleteEmployeeData = async (token, id) => { 

    const toastId = toast.loading('Loading...');
    let result = [];
    try {
           
        const response = await apiConnector('DELETE', DELETE_EMPLOYEE_DATA + `/${id}`, {},
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

        console.log("Error in delete Employee Data", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}

export const getEmployeeDataByUserId = async (token, userId) => { 

    let result = [];
    const toastId = toast.loading('Loading');

    try{

        const response = await apiConnector('GET', GET_EMPLOYEE_DATA_BY_USER_ID_API + `/${userId}`, {} ,
            {
                'Authorization': `Bearer ${token}`      
            }
        )

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        result = response.data.data;
    }catch(error){

        console.log("Error occured in get Employee Data By User Id", error);
        toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
    return result;
}