import Employee from "../models/Employee.js";
import User from "../models/User.js";

export const addEmployeeData = async (req, res) => { 

    try {

        const { name, email, password, role,employeeId, dob, department, gender, marital, designation, salary } = req.body;
        // console.log(req.body);

        if(!name || !email || !password || !role || !employeeId || !dob || !department || !gender || !marital || !designation || !salary) {
            
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

        const newUser = await User.create({
            name: name,
            email: email,
            password: password,
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