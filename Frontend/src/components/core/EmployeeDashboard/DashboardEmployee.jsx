import { IoIosPeople } from "react-icons/io";
import { useSelector } from "react-redux";

const DashboardEmployee = () => {

  const { user } = useSelector((state) => state.profile);

  return (
    <div className="bg-gray-200 w-full h-[calc(100vh-64px)]" >
      <div className="w-full p-4">
        <div className="bg-white h-full flex items-center gap-3">
          <div className="bg-teal-600 h-full">
          <IoIosPeople className="text-xl bg-teal-600 w-16 h-full" />
          </div>
          <div className="flex flex-col gap-1">
              <p className="text-base" >Welcome Back</p>
            <p className="text-lg font-semibold">{ user?.name }</p>
          </div>
        </div>
        
       </div>
    </div>
  )
}

export default DashboardEmployee