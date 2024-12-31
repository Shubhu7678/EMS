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
          <Route path="/dashboard/add-employee" element={<AddEmployee/>} />
          <Route path="/dashboard/department" element={<DepartmentList />} />
          <Route path="/dashboard/add-department" element={<AddDepartment/>} />
          <Route path="/dashboard/edit-department/:departmentId" element={<UpdateDepartment/>} />
          <Route path="/dashboard/leave" element={<Leave />} />
          <Route path="/dashboard/salary" element={<Salary />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
        <Route path="/employee-dashboard" element={
          <ProtectedRoute allowedRoles={['admin', 'employee']}>
            <EmployeeDashboard />
          </ProtectedRoute>

        } />
      </Routes>
      <Toaster />
    </>
  )
}

export default App