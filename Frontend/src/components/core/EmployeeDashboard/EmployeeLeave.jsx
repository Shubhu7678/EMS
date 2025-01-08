
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLeaveList } from "../../../slices/leaveSlice";
import { getEmployeeLeaves } from "../../../services/operations/LeaveApis";
const EmployeeLeave = () => {

  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { leaveList } = useSelector((state) => state.leave);
  const dispatch = useDispatch();

  useEffect(() => { 

    const fetchEmployeeLeaves = async () => { 

      try {
          
        const result = await getEmployeeLeaves(token, user?._id);
        if (result) { 

          dispatch(setLeaveList(result));
          console.log(result);
        }
      } catch (error) { 

          console.log("Error in fetching employee leaves", error);
      }
    }

    fetchEmployeeLeaves();
        
  },[dispatch, token, user]);
  return (
    <div className="w-full h-[calc(100vh-64px)] bg-gray-200 overflow-y-auto" >
      <div className="p-4">
        <div className="bg-white p-4 rounded-md">
        <div>
          <h1 className="text-3xl font-semibold">Manage Leaves</h1>
        </div>
        <div className="mt-4 flex justify-between">
          <input
            type="text"
            // onChange={filterDepartments}
            className="border bg-white px-2" placeholder="Search By Dep Name"
          />
            <NavLink
              className="px-2 py-2 rounded-md text-white  bg-teal-500 "
              to="/employee-dashboard/leave/add-leave"
            >
            Add Leave
          </NavLink>
        </div>

        <div className="mt-4">
          <div className="overflow-x-auto">
            <table className="table table-sm">
              {/* head */}
              <thead>
                <tr className="bg-base-200">
                  <th>SNO</th>
                  <th>LEAVE TYPE</th>
                  <th>FROM</th>
                  <th>TO</th>
                  <th>DESCRIPTION</th>
                    <th className="text-center" >APPLIED DATE</th>
                    <th>STATUS</th>
                </tr>
              </thead>
                <tbody>
                  { 
                    leaveList.map((leave, index) => (
                      <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{leave?.leaveType} </td>
                        <td>{ leave?.startDate}</td>
                        <td>{ leave?.endDate}</td>
                        <td>{leave?.reason }</td>
                        <td className="">{leave?.createdAt.split('T')[0] }</td>
                  <td>{leave?.status}</td>
                </tr>
                    ))
                  }
                
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeLeave