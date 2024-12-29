import Sidebar from "../components/core/auth/Dashboard/Sidebar";
import Navbar from "../components/core/auth/Dashboard/Navbar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full h-[calc(100vh-64px)] flex">
        
        <Sidebar />
         <div className="w-full h-[calc(100vh-64px)] overflow-y-auto">
              <Outlet/>
          </div>
       </div>
    </div>
  )
}

export default AdminDashboard