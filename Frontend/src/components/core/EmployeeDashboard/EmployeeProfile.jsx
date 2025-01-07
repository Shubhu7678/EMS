import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getEmployeeDataByUserId } from '../../../services/operations/EmployeeApis'

const EmployeeProfile = () => {

  const { user } = useSelector((state) => state.profile);
  const BASE_URL = import.meta.env.VITE_BASE_URI;
  const Image_url = BASE_URL + '/' + user?.profileImage;
  const [employeeData, setEmployeeData] = useState([]);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {

    const fetchEmployeeData = async () => {

      const result = await getEmployeeDataByUserId(token, user?._id);
      if (result) {
        setEmployeeData(result);
      }
    }
    fetchEmployeeData()

  }, [token, user])

  return (
    <div className="w-full h-[calc(100vh-64px)] overflow-y-auto bg-gray-200">
      <div className="px-6 py-3">
        <div className="bg-white pb-3">
          <h1 className="font-semibold text-3xl pt-8 pb-4 text-center">My Profile</h1>
          <div className="w-full flex items-center gap-8 mt-4 justify-center ">
            <div className="w-full flex justify-end pl-8">
              <img className="w-96 h-96 aspect-square rounded-full object-cover" src={Image_url} alt="" />
            </div>
            <div className="w-full">
              <ul className="flex flex-col gap-7">
                <li>
                  <span className="font-bold text-base">Name : </span>
                  <span className="font-mono text-lg">{user?.name}</span>
                </li>
                <li>
                  <span className="font-bold text-base">Employee Id : </span>
                  <span className="font-mono text-lg">{employeeData[0]?.employeeId}</span>
                </li>
                <li>
                  <span className="font-bold text-base">Date of Birth : </span>
                  <span className="font-mono text-lg">{employeeData[0]?.dateOfBirth}</span>
                </li>
                <li>
                  <span className="font-bold text-base">Gender : </span>
                  <span className="font-mono text-lg">{employeeData[0]?.gender}</span>
                </li>
                <li>
                  <span className="font-bold text-base">Department : </span>
                  <span className="font-mono text-lg">{employeeData[0]?.departmentId?.name}</span>
                </li>
                <li>
                  <span className="font-bold text-base">Marital Status : </span>
                  <span className="font-mono text-lg">{employeeData[0]?.marital}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default EmployeeProfile