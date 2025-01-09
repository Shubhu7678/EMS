import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import { Navigate } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard';
import { Toaster } from 'react-hot-toast';
import EmployeeDashboard from './pages/EmployeeDashboard';
import ProtectedRoute from './components/core/auth/ProtectedRoute';
import OpenRoute from './components/core/auth/OpenRoute';
import DepartmentList from './components/core/auth/Dashboard/DepartmentList';
import Leave from './components/core/auth/Dashboard/Leave';
import Salary from './components/core/auth/Dashboard/Salary';
import Settings from './components/core/auth/Dashboard/Settings';
import MyDashboard from './components/core/auth/Dashboard/MyDashboard';
import AddDepartment from './components/core/auth/Dashboard/Department/AddDepartment';
import UpdateDepartment from './components/core/auth/Dashboard/Department/UpdateDepartment';
import EmployeeList from './components/core/auth/Dashboard/EmployeeList';
import AddEmployee from './components/core/auth/Dashboard/Employee/AddEmployee';
import UpdateEmployee from './components/core/auth/Dashboard/Employee/UpdateEmployee';
import SalaryHistory from './components/core/auth/Dashboard/Salary/SalaryHistory';
import DashboardEmployee from './components/core/EmployeeDashboard/DashboardEmployee';
import EmployeeProfile from './components/core/EmployeeDashboard/EmployeeProfile';
import EmployeeLeave from './components/core/EmployeeDashboard/EmployeeLeave';
import EmployeeSalary from './components/core/EmployeeDashboard/EmployeeSalary';
import EmployeeSettings from './components/core/EmployeeDashboard/EmployeeSettings';
import EmployeeAddLeave from './components/core/EmployeeDashboard/Leave/EmployeeAddLeave';
import LeaveProfile from './components/core/auth/Dashboard/Leave/leaveProfile';
import LeaveHistory from './components/core/auth/Dashboard/Leave/LeaveHistory';



const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard/admin-dashboard" />} />
        <Route path="/login" element={
          <OpenRoute>
            <Login />
          </OpenRoute>
        } />
        <Route element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
        >
          <Route path="/dashboard/admin-dashboard" element={<MyDashboard />} />
          <Route path="/dashboard/employee" element={<EmployeeList />} />
          <Route path="/dashboard/add-employee" element={<AddEmployee />} />
          <Route path="/dashboard/edit-employee/:employeeId" element={<UpdateEmployee />} />
          <Route path="/dashboard/department" element={<DepartmentList />} />
          <Route path="/dashboard/add-department" element={<AddDepartment />} />
          <Route path="/dashboard/edit-department/:departmentId" element={<UpdateDepartment />} />
          <Route path="/dashboard/leave" element={<Leave />} />
           <Route path="/dashboard/leave/:leaveId" element={<LeaveProfile />} />
           <Route path="/dashboard/leaves-history/:employeeId" element={<LeaveHistory/>} />
        
          <Route path="/dashboard/salary" element={<Salary />} />
          <Route path="/dashboard/salary/:employeeId" element={<SalaryHistory />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>

        {/* Employee Dashboard  */}
        <Route element={
          <ProtectedRoute allowedRoles={['employee']}>
            <EmployeeDashboard />
          </ProtectedRoute>
        }>
          <Route path="/employee-dashboard/my-dashboard" element={<DashboardEmployee />} />
          <Route path="/employee-dashboard/my-profile" element={<EmployeeProfile />} />
          <Route path="/employee-dashboard/leave" element={<EmployeeLeave />} />
          <Route path="/employee-dashboard/leave/add-leave" element={<EmployeeAddLeave />} />

          <Route path="/employee-dashboard/salary" element={<EmployeeSalary />} />
          <Route path="/employee-dashboard/settings" element={<EmployeeSettings />} />

        </Route>
      </Routes>
      <Toaster />
    </>
  )
}

export default App