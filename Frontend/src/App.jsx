import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import  { Toaster } from 'react-hot-toast';

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/admin-dashboard" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App