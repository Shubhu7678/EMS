import { NavLink } from "react-router-dom";

const EmployeeList = () => {
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
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              <tr
              // className={`${index % 2 === 0 ? "bg-base-200" : ""}`}
              >
                    <th>1</th>
                    <td>First</td>
                    <td>description</td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <NavLink
                          className="px-3 py-2 rounded-md text-white bg-teal-500"
                          // to={`/dashboard/edit-department/${department._id}`}
                        >
                          Edit
                        </NavLink>
                        <NavLink
                          // onClick={() => handleDeleteDepartment(department?._id)}
                          className="px-3 py-2 rounded-md text-white bg-red-500"
                        >
                          Delete
                        </NavLink>
                      </div>
                    </td>
                  </tr>
            </tbody>


          </table>
        </div>
      </div>
    </div>
  )
}

export default EmployeeList