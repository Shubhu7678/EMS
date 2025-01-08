
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { employeeAddLeave } from "../../../../services/operations/LeaveApis";
import { setLeaveList } from "../../../../slices/leaveSlice";
import { useNavigate } from "react-router-dom";
    
const EmployeeAddLeave = () => {

    const { handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { leaveList } = useSelector((state) => state.leave);
    const navigate = useNavigate();


    const onSubmit = async(data) => {

        console.log(data);
        try {
            const result = await employeeAddLeave(token, data);
            if (result) { 

                dispatch(setLeaveList([...leaveList, result]));
                
                navigate("/employee-dashboard/leave");
            }

        } catch (error) { 

            console.log("Error in adding leave", error);
        }
    }
    return (
        <div className="w-full h-[calc(100vh-64px)] bg-gray-200 p-4">
            <div className="w-full bg-white p-4">
                <h1 className="font-semibold text-3xl ">Request Leave</h1>
                <div className="mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-2">
                            <label htmlFor="leaveType" className="text-gray-500">Leave Type</label>
                            <select className="border w-full p-2 rounded-md" name="leaveType" id=""
                                {...register("leaveType", { required: true })}
                            >
                                <option value="">Select Leave Type</option>
                                <option value="Casual Leave">Casual Leave</option>
                                <option value="Sick Leave">Sick Leave</option>
                                <option value="Annual Leave">Annual Leave</option>
                            </select>
                            {errors.leaveType && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="flex gap-2 mb-2">
                            <div className="w-full">
                                <label className="text-gray-500" htmlFor="startDate">Start Date</label>
                                <input
                                    className="border w-full p-2 rounded-md"
                                    type="date"
                                    name="startDate"
                                    {...register("startDate", { required: true })}
                                />
                                {errors.startDate && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="w-full">
                                <label className="text-gray-500" htmlFor="endDate">End Date</label>
                                <input
                                    className="border w-full p-2 rounded-md"
                                    type="date"
                                    name="endDate"
                                    {...register("endDate", { required: true })}
                                />
                                {errors.endDate && <span className="text-red-500">This field is required</span>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description">Reason</label>
                            <textarea
                                className="border border-gray-400 w-full p-2 rounded-md"
                                placeholder="Reason for leave ..."
                                rows={5}
                                name="description"
                                {...register("description", { required: true })}
                            />
                            {errors.description && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div>
                            <button className="bg-teal-600 w-full text-white p-2 rounded-md">Add Leave</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeAddLeave