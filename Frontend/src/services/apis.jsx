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

export const employeeEndPoints = {

     ADD_EMPLOYEE_API: BASE_URL + '/api/v1/employee/add-employee',
     GET_ALL_EMPLOYEE_LIST_API: BASE_URL + '/api/v1/employee/getAllEmployeesData',
     GET_EMPLOYEE_DATA_BY_ID_API: BASE_URL + '/api/v1/employee/getEmployeeDataById',
     UPDATE_EMPLOYEE_DATA_API: BASE_URL + '/api/v1/employee/updateEmployeeData',
}