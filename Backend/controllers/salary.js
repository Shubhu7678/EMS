import Employee from "../models/Employee.js";


export const getAllEmployeesByDepartmentId = async (req, res) => { 

    try {

        const { departmentId } = req.params;
        // consoel.log(departmentId);
        if (!departmentId) { 

            return res.status(401).json({

                success: false,
                message: "Department Id is required"
            })
        }

        const employees = await Employee.find({ departmentId: departmentId })
            .populate('departmentId', 'departmentName')
            .populate('userId', 'name email');
        
        
        return res.status(200).json({

            success: true,
            message: "Employees fetched successfully",
            data: employees
        })

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error : error.message
        })
    }
}