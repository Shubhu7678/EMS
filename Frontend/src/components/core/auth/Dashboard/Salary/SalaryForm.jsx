import { useForm } from "react-hook-form"
import { getAllDepartmentList } from "../../../../../services/operations/DepartmentApis";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllEmployeesByDepartmentId,addSalaryData } from "../../../../../services/operations/SalaryApis";

const SalaryForm = () => {

    const [departmentData, setDepartmentData] = useState([]);
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const { token } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    useEffect(() => {

        const fetchDepartment = async () => {

            try {

                const result = await getAllDepartmentList(token);
                if (result) {

                    setDepartmentData(result);
                }
            } catch (error) {

                console.log("Error in fetching department data in SalaryForm", error);
            }
        }

        fetchDepartment();

    }, [token])

    const handleChange = async (e) => {

        const departmentId = e.target.value;

        try {

            const employeeData = await getAllEmployeesByDepartmentId(token, departmentId);
            if (employeeData) {
                console.log(employeeData);
                setSelectedEmployees(employeeData);
            }

        } catch (error) {

            console.log("Error in handleChange in SalaryForm", error);
        }
    }

    const onSubmit = async(data) => {

        // console.log(data);  
        try {

            await addSalaryData(token, data);
            
        } catch (error) { 

            console.log("Error occured in handleSubmit in SalaryForm", error);
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex mb-2 gap-2">
                <div className="w-full">
                    <label htmlFor="departmentId" className="text-base text-gray-500" >Department</label>
                    <select name="departmentId" id="" className="p-2 w-full border border-gray-300 rounded-md"
                        {...register("departmentId", { required: true })}
                        onChange={handleChange}
                    >
                        <option value="">Select Department</option>
                        {departmentData.map((department, index) => (
                            <option
                                key={index} value={department._id}>{department.name}</option>
                        ))}
                    </select>
                    {errors.departmentId && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="w-full">
                    <label htmlFor="employeeId" className="text-base text-gray-500" >Employee</label>
                    <select name="employeeId" id="" className="p-2 w-full border border-gray-300 rounded-md"
                        {...register('employeeId', { required: true })}
                    >
                        <option value="">Select Employee</option>
                        {selectedEmployees.map((employee, index) => (
                            <option key={index} value={employee._id}>{employee?.userId?.name}</option>
                        ))}
                    </select>
                    {errors.employeeId && <span className="text-red-500">This field is required</span>}
                </div>
            </div>
            <div className="w-full flex mb-2 gap-2">
                <div className="w-full" >
                    <label htmlFor="basicSalary">Basic Salary</label>
                    <input
                        type="text"
                        name="basicSalary"
                        className="p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Basic Salary"
                        {...register('basicSalary', { required: true })}
                    />
                    {errors.basicSalary && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="w-full">
                    <label htmlFor="allowances">Allowances</label>
                    <input
                        type="text"
                        name="allowances"
                        className="p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Allowances"
                        {...register('allowances', { required: true })}
                    />
                    {errors.allowances && <span className="text-red-500">This field is required</span>}
                </div>
            </div>
            <div className="w-full flex mb-2 gap-2">
                <div className="w-full">
                    <label htmlFor="deduction">Deduction</label>
                    <input
                        type="text"
                        name="deduction"
                        className="p-2 w-full border border-gray-300 rounded-md"
                        placeholder="deduction"
                        {...register('deduction', { required: true })}
                    />
                    {errors.deduction && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="w-full">
                    <label htmlFor="payDate">Pay Date</label>
                    <input
                        type="date"
                        name="payDate"
                        className="p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Pay Date"
                        {...register('payDate', { required: true })}
                    />
                    {errors.payDate && <span className="text-red-500">This field is required</span>}
                </div>
            </div>
            <div className="">
                <button className="bg-teal-600 text-white w-full px-2 py-2 rounded-sm" >Submit</button>
            </div>
        </form>
    )
}


export default SalaryForm;