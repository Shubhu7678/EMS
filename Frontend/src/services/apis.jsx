const BASE_URL = import.meta.env.VITE_BASE_URI;

export const authEndPoints = {

     LOGIN_API: BASE_URL + '/api/v1/auth/login',

}

export const departmentEndPoints = {

     ADD_DEPARTMENT_API: BASE_URL + '/api/v1/department/add-department',
     GET_ALL_DEPARTMENT_API: BASE_URL + '/api/v1/department/getAllDepartments',
     GET_DEPARTMENT_BY_ID_API: BASE_URL + '/api/v1/department/getDepartmentById',
     UPDATE_DEPARTMENT_API: BASE_URL + '/api/v1/department/updateDepartment',
     DELETE_DEPARTMENT_API : BASE_URL + '/api/v1/department/deleteDepartment',
}