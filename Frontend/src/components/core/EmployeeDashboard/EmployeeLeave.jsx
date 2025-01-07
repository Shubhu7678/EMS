
import { NavLink } from "react-router-dom";
const EmployeeLeave = () => {
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
                <tr
                >
                  <th>1</th>
                  <td>asdf </td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td className="text-center">
                    asdfff
                    </td>
                  <td>asdf</td>
                </tr>
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