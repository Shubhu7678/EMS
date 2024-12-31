import { useParams } from "react-router-dom";
import DepartmentForm from "./DepartmentForm";
import { useDispatch, useSelector } from "react-redux";
import { setEditDepartment,setDepartment } from "../../../../../slices/departmentSlice";
import { useEffect } from "react";
import { getDepartmentDataById } from "../../../../../services/operations/DepartmentApis";
const UpdateDepartment = () => {

    const { departmentId } = useParams();
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    
    useEffect(() => {
        
        const getDepartmentData = async () => {
            
            const result = await getDepartmentDataById(token, departmentId);
            
            if (result) { 
                
                dispatch(setEditDepartment(true));
                dispatch(setDepartment(result));
                console.log(result);
            }
        }
        getDepartmentData();

    }, [departmentId, token,dispatch]);
    

    return (
        <>
            <div className="w-full h-full bg-gray-200 px-8 py-6" >
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-[400px] mt-4 mx-auto p-6 shadow rounded-md bg-white">
                        <h1 className="text-2xl text-center mb-5 font-semibold">Update Department</h1>
                        <DepartmentForm />
                    </div>

                </div>
            </div>
        </>
    )
}

export default UpdateDepartment;