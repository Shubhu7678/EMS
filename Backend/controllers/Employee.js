import Employee from "../models/Employee.js";
import User from "../models/User.js";
import bcrypt from 'bcrypt';

export const addEmployeeData = async (req, res) => {

    try {

        const { name, email, password, role, employeeId, dob, department, gender, marital, designation, salary } = req.body;
        // console.log(req.body);

        if (!name || !email || !password || !role || !employeeId || !dob || !department || !gender || !marital || !designation || !salary) {

            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const profileImage = req.file.path;

        if (!profileImage) {

            return res.status(400).json({

                success: false,
                message: "Profile image is required",
            });
        }

        const hashedPassword = bcrypt.hash(password, 10);

        const newUser = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            role: role,
            profileImage: profileImage,
        });


        const newEmployee = await Employee.create({

            userId: newUser._id,
            employeeId: employeeId,
            dateOfBirth: dob,
            departmentId: department,
            gender: gender,
            marital: marital,
            designation: designation,
            salary: salary,
        });

        const populatedEmployee = await Employee.findById(newEmployee._id)
            .populate('userId')
            .populate('departmentId');

        return res.status(200).json({

            success: true,
            message: "Employee added successfully",
            data: populatedEmployee,
        });
    } catch (error) {

        return res.status(400).json({

            success: false,
            message: "Internal Server Error",
            error: error.message
        });

    }
}

export const getAllEmployeesData = async (req, res) => {

    try {

        const employees = await Employee.find()
            .populate('userId')
            .populate('departmentId');

        return res.status(200).json({

            success: true,
            message: "All employees data fetched successfully",
            data: employees,
        })
        
    } catch (error) {

        res.status(500).json({

            success: false,
            message: "Internal Server Error",
        })
    }
}

export const getEmployeeDataById = async (req, res) => { 

    try {

        const { employeeId } = req.params;

        const employee = await Employee.findById(employeeId)
            .populate('userId')
            .populate('departmentId');
        
        if (!employee) {

            return res.status(404).json({

                success: false,
                message: "Employee not found",
            });
        }
    
        return res.status(200).json({
            
            success: true,
            message: "Employee data fetched successfully",
            data: employee,
        });

    } catch (error) { 

        res.status(500).json({
            
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export const updateEmployeeData = async (req, res) => { 

    try {
        
        const { id } = req.params;
        console.log(req.body);

        const { name, email, password, role, dob, department, employeeId, gender, marital, designation, salary } = req.body;
        
        if (!id) { 

            return res.status(400).json({
                
                success: false,
                message: "Employee Id is required",
            });
        }

        const employee = await Employee.findById(id);

        if(!employee) { 

            return res.status(404).json({
                
                success: false,
                message: "Employee not found",
            });
        }

        const user = await User.findById(employee.userId);

        if (name) {
            user.name = name;
        }
        if(email) {
            user.email = email;
        }
        if(password) {
            const hashedPassword = bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }
        if(role) {
            user.role = role;
        }

        await user.save();
        if(dob) {
            employee.dateOfBirth = dob;
        }
        if(department) {
            employee.departmentId = department;
        }
        if(employeeId) {
            employee.employeeId = employeeId;
        }
        if (gender) {
            employee.gender = gender;
        }
        if (marital) {
            employee.marital = marital;
        }
        if (designation) {
            employee.designation = designation;
        }
        if (salary) {
            employee.salary = salary;
        }
        
        await employee.save();

        const updatedEmployee = await Employee.findById(id)
            .populate('userId')
            .populate('departmentId');
        
        return res.status(200).json({
            
            success: true,
            message: "Employee data updated successfully",
            data: updatedEmployee,
        });

    } catch (error) { 

        res.status(500).json({
            
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}