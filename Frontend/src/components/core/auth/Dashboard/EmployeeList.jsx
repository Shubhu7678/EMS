import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllEmployeeList, deleteEmployeeData } from "../../../../services/operations/EmployeeApis";
import { setEmployeeList } from "../../../../slices/employeeSlice";

const EmployeeList = () => {

  const { employeeList } = useSelector((state) => state.employee);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URI;

  const handleDeleteEmployee = async (id) => { 

    try {
        
      const result = await deleteEmployeeData(token, id);
      if (result) { 

          dispatch(setEmployeeList(employeeList.filter((employee) => employee._id !== result._id)));
      }

    } catch (error) { 

       console.log("Error in deleting employee", error.message);
    }
  }

  useEffect(() => {

    const fetchAllEmployeeData = async () => {

      const result = await getAllEmployeeList(token);
      if (result) {

        dispatch(setEmployeeList(result));
      }
    }

    fetchAllEmployeeData();

  }, [token, dispatch])

  return (
    <div className="px-8 py-6 w-full h-full bg-gray-200">
      <div>
        <h1 className="text-3xl font-semibold">Employees List</h1>
      </div>
      <div className="mt-4 flex justify-between">
        <input
          type="text"
          // onChange={filterDepartments}
          className="border bg-white px-2" placeholder="Search By Dep Name"
        />
        <NavLink className="px-2 py-2 rounded-md text-white  bg-teal-500 " to="/dashboard/add-employee">
          Add New Employee
        </NavLink>
      </div>

      <div className="mt-4">
        <div className="overflow-x-auto">
          <table className="table table-sm">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>D.O.B</th>
                <th>Department</th>
                <th className="text-center" >Action</th>
              </tr>
            </thead>
            <tbody>

              {
                employeeList.length > 0 && employeeList?.map((employee, index) => (

                  <tr key={index}
                    className={`${index % 2 === 0 ? "bg-base-200" : ""}`}
                  >
                    <th>{index + 1}</th>
                    <td>
                      <img className="w-14 h-14 object-cover" src={BASE_URL + '/' + employee?.userId?.profileImage} alt="" />
                    </td>
                    <td>{employee?.userId?.name}</td>
                    <td>{employee?.dateOfBirth}</td>
                    <td>{employee?.departmentId?.name}</td>
                    <td className="text-center">
                      <div className="flex gap-2 items-center justify-center">
                        <NavLink
                          className="px-3 py-2 rounded-md text-white bg-teal-500"
                      
                        >
                          View
                        </NavLink>
                        <NavLink
                          to={`/dashboard/edit-employee/${employee?._id}`}
                          className="px-3 py-2 rounded-md text-white bg-orange-500"
                        >
                          Edit
                        </NavLink>
                        <NavLink
                          to={`/dashboard/salary/${employee?._id}`}
                          className="px-3 py-2 rounded-md text-white bg-green-500"
                        >
                          Salary
                        </NavLink>
                        <NavLink
                          onClick={() => handleDeleteEmployee(employee?._id)}
                          className="px-3 py-2 rounded-md text-white bg-red-500"
                        >
                          Delete
                        </NavLink>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EmployeeList