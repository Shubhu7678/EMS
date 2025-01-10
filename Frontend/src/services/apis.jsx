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
     DELETE_EMPLOYEE_DATA: BASE_URL + '/api/v1/employee/deleteEmployee',
     GET_EMPLOYEE_DATA_BY_USER_ID_API : BASE_URL + '/api/v1/employee/getEmployeeDataByUserId'
}

export const salaryEndPoints = {

     GET_ALL_EMPLOYEE_LIST_BY_DEPARTMENT_ID_API: BASE_URL + '/api/v1/salary/getAllEmployeesByDepartmentId',
     ADD_SALARY_DATA_API: BASE_URL + '/api/v1/salary/addSalary',
     GET_SALARY_HISTORY_API: BASE_URL + '/api/v1/salary/getSalaryHistory',
     GET_SALARY_HISTORY_BY_EMPLOYEE_ID_API: BASE_URL + '/api/v1/salary/getEmployeeSalaryByEmployeeId'
}

export const employeeLeaveEndPoints = {

     EMPLOYEE_ADD_LEAVE_API: BASE_URL + '/api/v1/leave/addLeave',
     GET_EMPLOYEE_LEAVES_API: BASE_URL + '/api/v1/leave/getEmployeeLeaves',
     GET_ALL_LEAVES_API: BASE_URL + '/api/v1/leave/getAllLeaves',
     GET_LEAVE_DATA_BY_ID_API: BASE_URL + '/api/v1/leave/getLeaveById',
     CHANGE_LEAVE_STATUS_API: BASE_URL + '/api/v1/leave/changeLeaveStatus',
     GET_EMPLOYEE_LEAVES_BY_EMPLOYEE_ID_API: BASE_URL + '/api/v1/leave/getEmployeeLeavesByEmployeeId'
}

export const SettingEndPoints = {

     CHANGE_PASSWORD_API : BASE_URL + '/api/v1/auth/changePassword'
}

export const DashboardEndPoints = {

      GET_DASHBOARD_OVERVIEW_API : BASE_URL + '/api/v1/auth/getDashboardOverview'
}