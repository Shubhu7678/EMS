import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setLeaveList } from "../../../../slices/leaveSlice";
import { getAllLeaves } from "../../../../services/operations/LeaveApis";
const Leave = () => {

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { leaveList } = useSelector((state) => state.leave);
  const [filterLeaves, setFilterLeaves] = useState([]);
  const [flag, setFlag] = useState('');

  const diffInDays = (date1, date2) => {

    const timeDiff = new Date(date2) - new Date(date1)
    let dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return dayDiff;
  }

  const handleChangeFilterLeaves = (e) => {

    

    const filteredLeaves = leaveList.filter((leave) => {

      return leave?.employeeId?.userId?.name.includes(e.target.value.toLowerCase());
    })

    setFilterLeaves(filteredLeaves);

  }

  const handleClickFilterLeaves = (status) => { 

    if (status === flag) { 

      setFilterLeaves([]);
      setFlag('');
      return;
    }
    const filteredData = leaveList.filter((leave) => leave?.status.includes(status.toLowerCase()));
    setFlag(status);
    setFilterLeaves(filteredData);
  }

  useEffect(() => {

    const fetchAllLeaves = async () => {

      try {

        const result = await getAllLeaves(token);
        if (result) {

          dispatch(setLeaveList(result));
        }

      } catch (error) {

        console.log("Error occured in fetchAllLeaves", error);
      }
    }

    fetchAllLeaves();

  }, [dispatch, token]);
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
              onChange={handleChangeFilterLeaves}
              className="border bg-white px-2" placeholder="Search By Emp Name"
            />
            <div className="flex gap-2" >

              <NavLink
              onClick={() => handleClickFilterLeaves('Pending')}
                className="px-2 py-2 rounded-md text-white  bg-teal-500 "
              >
                Pending
              </NavLink>
              <NavLink
              onClick={() => handleClickFilterLeaves('Rejected')}
                className="px-2 py-2 rounded-md text-white  bg-teal-500 "
              >
                Rejected
              </NavLink>
              <NavLink
              onClick={() => handleClickFilterLeaves('Approved')}
                className="px-2 py-2 rounded-md text-white  bg-teal-500 "

              >
                Approved
              </NavLink>
            </div>
          </div>

          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="bg-base-200">
                    <th>SNO</th>
                    <th>Emp ID</th>
                    <th>Name</th>
                    <th>Leave Type</th>
                    <th>Department</th>
                    <th className="text-center" >Days</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filterLeaves.length > 0 ? (
                     filterLeaves.map((leave, index) => (

                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{leave?.employeeId?.employeeId}</td>
                        <td>{leave?.employeeId?.userId?.name}</td>
                        <td>{leave?.leaveType}</td>
                        <td>{leave?.employeeId?.departmentId?.name}</td>
                        <td className="text-center">{diffInDays(leave?.startDate, leave?.endDate)}</td>
                        <td className="">{leave?.status}</td>
                        <td className="">
                          <NavLink
                            className="px-2 py-2 rounded-md text-white  bg-teal-500 "
                            to={`/dashboard/leave/${leave?._id}`}>View</NavLink>
                        </td>

                      </tr>
                    ))
                  ) : (

                    leaveList.length > 0 && leaveList.map((leave, index) => (

                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{leave?.employeeId?.employeeId}</td>
                        <td>{leave?.employeeId?.userId?.name}</td>
                        <td>{leave?.leaveType}</td>
                        <td>{leave?.employeeId?.departmentId?.name}</td>
                        <td className="text-center">{diffInDays(leave?.startDate, leave?.endDate)}</td>
                        <td className="">{leave?.status}</td>
                        <td className="">
                          <NavLink
                            className="px-2 py-2 rounded-md text-white  bg-teal-500 "
                            to={`/dashboard/leave/${leave?._id}`}>View</NavLink>
                        </td>

                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leave