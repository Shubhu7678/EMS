import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { addNewDepartment, updateDepartmentData } from '../../../../../services/operations/DepartmentApis';
import { setDepartmentList } from "../../../../../slices/departmentSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DepartmentForm = () => {

    const { token } = useSelector((state) => state.auth);
    const { departmentList, editDepartment, department } = useSelector((state) => state.department);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { handleSubmit,
        register,
        reset,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    const formUpdated = () => { 
      
        const formValue = getValues();

        if (department?.name !== formValue.department_name || department?.description !== formValue.department_description) {

            return true
        } else { 

            return false;
        }

    }

    const onSubmit = async (data) => {

        // console.log(data);

        if (editDepartment) {
             
            try {

                const isFormValueChange = formUpdated();

                if (isFormValueChange) { 

                    const formData = {};
                    if (data.department_name !== department?.name) { 
                        console.log(data.department_name);
                        // formData.append('department_name', data.department_name);
                        formData.department_name = data.department_name;
                    }
                    if (data.department_description !== department?.description) { 

                        // formData.append('department_description', data.department_description); 
                        formData.department_description = data.department_description;
                    }

                    const result = await updateDepartmentData(token, department?._id, formData);

                    if (result) { 

                        reset();
                        dispatch(setDepartmentList(departmentList.map((department) => department._id === result._id ? result : department)));
                        navigate('/dashboard/department');
                    }
                }
            } catch (error) { 

                console.log('Error occured in update department', error);
            }

        } else {

            try {

                const result = await addNewDepartment(token, data);
                if (result) {

                    reset();
                    console.log(result);
                    dispatch(setDepartmentList([...departmentList, result]));
                    navigate('/dashboard/department');
                }

            } catch (error) {

                console.log("Error occured in add department", error);

            }
        }
    }

    useEffect(() => { 

        if (editDepartment) { 

            setValue('department_name', department?.name);
            setValue('department_description', department?.description);
        }

    },[department,editDepartment,setValue])


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex mb-2 flex-col gap-0">
                    <label htmlFor="department_name" className="text-base">Department Name</label>
                    <input
                        type="text"
                        name="department_name"
                        className="w-full  border-gray-400 border-[0.5px] px-2 py-2 rounded-sd "
                        placeholder="Enter Department Name"
                        {...register("department_name", { required: true })}
                    />
                    {errors.department_name && (
                        <span className="text-red-500 text-sm">
                            Department Name is required
                        </span>
                    )}
                </div>
                <div className="flex mb-4 flex-col gap-0">
                    <label htmlFor="department_description">Description</label>
                    <textarea
                        type="text"
                        name="department_description"
                        className="w-full border-[0.5px] border-gray-400 px-2 py-2 rounded-sd "
                        rows={5}
                        placeholder="Enter Description"
                        {...register("department_description")}
                    />
                    {errors.department_description && (
                        <span className="text-red-500 text-sm">
                            Description is required
                        </span>
                    )}
                </div>
                <div className="">
                    <button className="bg-teal-600 text-white w-full px-2 py-2 rounded-sm" >Submit</button>
                </div>
            </form>
        </>
    )

}

export default DepartmentForm;