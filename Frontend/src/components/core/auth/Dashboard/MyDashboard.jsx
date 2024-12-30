import { FaBuilding, FaMoneyBillWave, FaUser } from "react-icons/fa6"
import DashboardOverview from "../../../common/DashboardOverview"
import { FaFileAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaHourglassHalf } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

const MyDashboard = () => {
  return (
    <div className="px-8 py-6 bg-gray-200 w-full h-[calc(100vh-64px)] overflow-y-auto">
      <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
      <div className="mt-7 w-full flex flex-wrap  gap-6">
        <DashboardOverview flexSize={'w-[30%]'} icon={<FaUser />} text={'Total Employees'} number={5} color={'bg-teal-600'} />
        <DashboardOverview flexSize={'w-[30%]'} icon={<FaBuilding />} text={'Total Deparment'} number={3} color={'bg-yellow-500'} />
        <DashboardOverview flexSize={'w-[30%]'} icon={<FaMoneyBillWave />} text={'Monthly Salary'} number={3} color={'bg-red-500'} />
        

      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-semibold text-center">Leave Details</h1>
        <div className="flex flex-wrap gap-6 mt-6" >

        <DashboardOverview flexSize={'w-[48%]'} icon={<FaFileAlt />} text={'Leave Applied'} number={3} color={'bg-teal-600'} />
        <DashboardOverview flexSize={'w-[48%]'} icon={<FaCircleCheck />} text={'Leave Approved'} number={3} color={'bg-green-500'} />
        <DashboardOverview flexSize={'w-[48%]'} icon={<FaHourglassHalf />} text={'Leave Pending'} number={3} color={'bg-yellow-600'} />
        <DashboardOverview flexSize={'w-[48%]'} icon={<FaTimesCircle />} text={'Leave Rejected'} number={3} color={'bg-red-500'} />
        </div>
      </div>
    </div>
  )
}

export default MyDashboard