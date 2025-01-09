import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getEmployeeLeavesByEmployeeId } from "../../../../../services/operations/LeaveApis";


const LeaveHistory = () => {

    const { employeeId } = useParams();
    const { token } = useSelector((state) => state.auth);
    const [leaveHistory, setLeaveHistory] = useState([]);

    useEffect(() => {
        const fetchEmployeeLeaves = async (employeeId) => {

            try {

                const result = await getEmployeeLeavesByEmployeeId(token, employeeId);
                if (result) { 

                    setLeaveHistory(result);
                    console.log(result);
                }

            } catch (error) {

                console.log("Error in fetching employee leaves", error);
            }
        }
        fetchEmployeeLeaves(employeeId);
    }, [employeeId, token])

    return (
        <div className="w-full h-[calc(100vh-64px)] bg-gray-200 overflow-y-auto" >
      <div className="p-4">
        <div className="bg-white p-4 rounded-md">
        <div>
          <h1 className="text-3xl font-semibold">Leave History</h1>
        </div>
        <div className="mt-4 flex justify-between">
          <input
            type="text"
            // onChange={filterDepartments}
            className="border bg-white px-2" placeholder="Search By Dep Name"
          />
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
                    leaveHistory.length > 0 && leaveHistory.map((leave, index) => (
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

export default LeaveHistory