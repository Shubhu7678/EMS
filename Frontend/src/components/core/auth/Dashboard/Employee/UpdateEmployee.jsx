import { useEffect } from "react"
import EmployeeForm from "./EmployeeForm"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { setEditEmployee, setEmployee } from "../../../../../slices/employeeSlice";
import { getEmployeeDataById } from "../../../../../services/operations/EmployeeApis";

const UpdateEmployee = () => {

    const { token } = useSelector((state) => state.auth);
    const { employeeId } = useParams();
    const dispatch = useDispatch();
 
    useEffect(() => {
         
        const fetchEmployeeData = async() => { 
            try {
                  
                const result = await getEmployeeDataById(token, employeeId);

                if (result) { 

                
                    dispatch(setEditEmployee(true));
                    dispatch(setEmployee(result));
                }

            } catch (error) { 

                console.log("Error in Fetch Employee Data", error);
            }

        }
        fetchEmployeeData();
     },[dispatch, employeeId, token])

  return (
    <div className="w-full h-full overflow-y-auto bg-gray-200 px-8 py-6" >
      <div className="w-full rounded-md p-4 bg-white">
          <h1 className="text-2xl mb-4 font-semibold">Update Department</h1>
          <EmployeeForm />
        </div>
    </div>
  )
}

export default UpdateEmployee