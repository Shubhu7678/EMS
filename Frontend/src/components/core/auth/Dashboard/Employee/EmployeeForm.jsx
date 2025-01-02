import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getAllDepartmentList } from '../../../../../services/operations/DepartmentApis';
import { setDepartmentList } from '../../../../../slices/departmentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployeeData } from '../../../../../services/operations/EmployeeApis';
import { setEditEmployee, setEmployeeList } from '../../../../../slices/employeeSlice';
import { useNavigate } from 'react-router-dom';
import { updateEmployeeData } from '../../../../../services/operations/EmployeeApis';
import toast from 'react-hot-toast';

const EmployeeForm = () => {

    const { token } = useSelector((state) => state.auth);
    const { departmentList } = useSelector((state) => state.department);
    const { editEmployee, employee, employeeList } = useSelector((state) => state.employee);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors }
    } = useForm();

    useEffect(() => {

        const fetchDepartment = async () => {

            const result = await getAllDepartmentList(token);
            if (result) {

                dispatch(setDepartmentList(result));
            }
        }
        fetchDepartment();

    }, [token, dispatch, navigate]);


    useEffect(() => {

        if (editEmployee) {

            setValue('name', employee?.userId?.name);
            setValue('email', employee?.userId?.email);
            setValue('employeeId', employee?.employeeId);
            setValue('dob', employee?.dateOfBirth);
            setValue('department', employee?.departmentId?.name);
            setValue('gender', employee?.gender);
            setValue('marital', employee?.marital);
            setValue('designation', employee?.designation);
            setValue('department', employee?.departmentId?._id);
            setValue('salary', employee?.salary);
            setValue('role', employee?.userId?.role);
            setValue('password', employee?.userId?.password);
        }
    }, [setValue, editEmployee, employee])

    const formChanged = () => {

        const updatedData = getValues();
        if (updatedData.name !== employee?.userId?.name || updatedData.role !== employee?.userId?.role
            || updatedData.email !== employee?.userId?.email || updatedData.employeeId !== employee?.employeeId
            || updatedData.dob !== employee?.dateOfBirth || updatedData.department !== employee?.departmentId?._id
            || updatedData.gender !== employee?.gender || updatedData.marital !== employee?.marital
            || updatedData.designation !== employee?.designation || updatedData.salary !== employee?.salary
            || updatedData.password !== employee?.userId?.password) {
            return true;
        } else {

            return false;
        }
    }

    const onSubmit = async (data) => {

        // console.log(data);
        if (editEmployee) {

            const isFormChanged = formChanged();
            if (isFormChanged) {

                const formData = {}
                if (data.name !== employee?.userId?.name) {

                    formData.name = data.name;
                }
                if (data.email !== employee?.userId?.email) {
                    formData.email = data.email;
                }
                if (data.employeeId !== employee?.employeeId) {
                    formData.employeeId = data.employeeId;
                }
                if (data.dob !== employee?.dateOfBirth) {
                    formData.dob = data.dob;
                }
                if (data.department !== employee?.departmentId?._id) {
                    formData.department = data.department;
                }
                if (data.gender !== employee?.gender) {
                    formData.gender = data.gender;
                }
                if (data.marital !== employee?.marital) {
                    formData.marital = data.marital;
                }
                if (data.designation !== employee?.designation) {
                    formData.designation = data.designation;
                }
                if (data.salary !== employee?.salary) {
                    formData.salary = data.salary;
                }
                if (data.password !== employee?.userId?.password) {
                    formData.password = data.password;
                }
                if (data.role !== employee?.userId?.role) {
                    formData.role = data.role;
                }
                try {

                    const result = await updateEmployeeData(formData, token, employee._id);
                    if (result) {
                        console.log(result);
                        dispatch(setEmployeeList(employeeList.map((employee) => employee._id === result._id ? result : employee)));
                        dispatch(setEditEmployee(false));
                        navigate('/dashboard/employee');

                    }
                } catch (error) {

                    console.log("Error in Update Employee Data", error);

                }

            } else {

                console.log("Form Not Changed....");
                toast.error("Form Not Changed....");
            }

        } else {

            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('employeeId', data.employeeId);
            formData.append('dob', data.dob);
            formData.append('department', data.department);
            formData.append('gender', data.gender);
            formData.append('marital', data.marital);
            formData.append('designation', data.designation);
            formData.append('salary', data.salary);
            formData.append('password', data.password);
            formData.append('role', data.role);
            formData.append('profileImage', data.profileImage[0]);

            try {

                const result = await addEmployeeData(formData, token);
                if (result) {

                    // console.log(result); 
                    dispatch(setEmployeeList([...employeeList, result]));
                    navigate('/dashboard/employee');
                }
            } catch (error) {

                console.log(error);
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex gap-4 mb-3">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="name" className="text-gray-500">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Enter name"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="email" className="text-gray-500">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Enter email"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>
                </div>
                <div className="w-full flex gap-4 mb-3">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="employeeId" className="text-gray-500">Employee Id</label>
                        <input
                            type="text"
                            name="employeeId"
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Enter Employee Id"
                            {...register('employeeId', { required: true })}
                        />
                        {errors.employee && <span className="text-red-500">Employee Id is required</span>}
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="dob" className="text-gray-500">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Enter Date of Birth"
                            {...register('dob', { required: true })}
                        />
                        {errors.dob && <span className="text-red-500">Date of Birth is required</span>}
                    </div>
                </div>
                <div className="w-full flex gap-4 mb-3">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="gender" className="text-gray-500">Gender</label>
                        <select name="gender" className="p-2 border border-gray-300 rounded-md"
                            {...register('gender', { required: true })}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <span className="text-red-500">Gender is required</span>}
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="marital" className="text-gray-500">Marital Status</label>
                        <select name="marital" className="p-2 border border-gray-300 rounded-md"
                            {...register('marital', { required: true })}
                        >
                            <option value="">Select Marital Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                        </select>
                        {errors.marital && <span className="text-red-500">Marital Status is required</span>}
                    </div>
                </div>
                <div className="w-full flex gap-4 mb-3">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="designation" className="text-gray-500">Designation</label>
                        <input
                            type="text"
                            name="designation"
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Enter designation"
                            {...register('designation', { required: true })}
                        />
                        {errors.designation && <span className="text-red-500">Designation is required</span>}
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="department" className="text-gray-500">Department</label>
                        <select name="department" className="p-2 border border-gray-300 rounded-md"
                            {...register('department', { required: true })}
                        >
                            <option value="">Select Department</option>
                            {departmentList.map((department, index) => (
                                <option key={index} value={department._id}>{department.name}</option>
                            ))}
                        </select>
                        {errors.department && <span className="text-red-500">Department is required</span>}
                    </div>
                </div>
                <div className="w-full flex gap-4 mb-3">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="salary" className="text-gray-500">Salary</label>
                        <input
                            type="number"
                            name="salary"
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Enter salary"
                            {...register('salary', { required: true })}
                        />
                        {errors.salary && <span className="text-red-500">Salary is required</span>}
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="password" className="text-gray-500">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Enter password"
                            {...register('password', { required: true })}
                        />
                        {errors.password && <span className="text-red-500">Password is required</span>}
                    </div>
                </div>
                <div className="w-full flex gap-4 mb-3">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="role" className="text-gray-500">Role</label>
                        <select name="role" className="p-2 border border-gray-300 rounded-md"
                            {...register('role', { required: true })}
                        >
                            <option value="">Select Role</option>
                            <option value="employee">Employee</option>
                            <option value="admin">Admin</option>
                        </select>
                        {errors.role && <span className="text-red-500">Role is required</span>}
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        {
                            !editEmployee && (
                                <>
                                    <label htmlFor="profileImage" className="text-gray-500">Upload Image</label>
                                    <input
                                        type="file"
                                        name="profileImage"
                                        className="p-2 border border-gray-300 rounded-md"
                                        placeholder="Upload Image"
                                        {...register('profileImage', { required: true })}
                                    />
                                    {errors.profileImage && <span className="text-red-500">Profile Image is required</span>}
                                </>
                            )
                        }

                    </div>
                </div>
                <div className="mt-4">
                    <button className="w-full p-2 bg-teal-600 text-white rounded-md" >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EmployeeForm