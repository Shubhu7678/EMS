import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAllDepartmentList } from "../../../../services/operations/DepartmentApis"
import { setDepartmentList } from "../../../../slices/departmentSlice"

const DepartmentList = () => {

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { departmentList } = useSelector((state) => state.department);
  console.log("departmentList", departmentList);

  const splitFive = (data) => { 

    const dataSeperated = data.split(' ');
    if (dataSeperated.length <= 5) {
      return dataSeperated.join(' ');
    } else { 
      return dataSeperated.slice(0, 5).join(' ') + '...';
    }
  }

  useEffect(() => {

    const getAllDepartmentData = async () => {

      const result = await getAllDepartmentList(token);
      if (result) {

        dispatch(setDepartmentList(result));

      }
    }

    getAllDepartmentData();

  }, [dispatch, token])

  return (
    <div className="px-8 py-6 w-full h-full bg-gray-200">
      <div>
        <h1 className="text-3xl font-semibold">Department List</h1>
      </div>
      <div className="mt-4 flex justify-between">
        <input type="text" className="border bg-white px-2" placeholder="Search By Dep Name" />
        <NavLink className="px-2 py-2 rounded-md text-white  bg-teal-500 " to="/dashboard/add-department">
          Add New Department
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
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {
                departmentList.length > 0 && departmentList.map((department, index) => (

                  <tr key={index} className={`${index % 2 === 0 ? 'bg-base-200' : ''}`}>
                    <th>{index + 1}</th>
                    <td>{department.name}</td>
                    <td>{ splitFive(department.description) }</td>
                    <td>
                      <div className="flex gap-2 items-center">

                       <NavLink className="px-3 py-2 rounded-md text-white  bg-teal-500 " to={`/dashboard/edit-department/${department._id}`}>
                          Edit
                        </NavLink>
                       <NavLink className="px-3 py-2 rounded-md text-white  bg-red-500 " to={`/dashboard/edit-department/${department._id}`}>
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

export default DepartmentList