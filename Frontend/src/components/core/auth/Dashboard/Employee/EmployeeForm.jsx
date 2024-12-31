

const EmployeeForm = () => {
    return (
        <div>
            <form>
                <div className="w-full flex gap-4 mb-3">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="name" className="text-gray-500">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="email" className="text-gray-500">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Enter email"
                        />
                    </div>
                </div>
                <div className="w-full flex gap-4 mb-3">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="employee" className="text-gray-500">Employee Id</label>
                        <input
                            type="text"
                            name="employee"
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Enter Employee Id"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="dob" className="text-gray-500">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Enter Date of Birth"
                        />
                    </div>
                </div>
                <div className="w-full flex gap-4 mb-3">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="gender" className="text-gray-500">Gender</label>
                        <select name="gender" className="p-2 border border-gray-300 rounded-md">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                       </select>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="marital" className="text-gray-500">Marital Status</label>
                        <select name="marital" className="p-2 border border-gray-300 rounded-md">
                            <option value="">Select Marital Status</option>
                            <option value="male">Single</option>
                            <option value="female">Married</option>
                       </select>
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
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="department" className="text-gray-500">Department</label>
                        <select name="department" className="p-2 border border-gray-300 rounded-md">
                            <option value="">Select Department</option>
                       </select>
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
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="password" className="text-gray-500">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Enter password"
                        />
                    </div>
                </div>
                <div className="w-full flex gap-4 mb-3">
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="role" className="text-gray-500">Role</label>
                        <select name="role" className="p-2 border border-gray-300 rounded-md">
                            <option value="">Select Role</option>
                            <option value="employee">Employee</option>
                            <option value="admin">Admin</option>
                       </select>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="profileImage" className="text-gray-500">Upload Image</label>
                        <input
                            type="file"
                            name="profileImage"
                            className="p-2 border border-gray-300 rounded-md"
                            placeholder="Upload Image"
                        />
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