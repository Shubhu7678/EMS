import Department from "../models/Department.js";

export const addDepartment = async (req, res) => {

    try {

        const { department_name: name, department_description: description } = req.body;
        // console.log("Request body", req.body);
        if (!name || !description) {
            return res.status(400).json({

                success: false,
                message: "Please provide department name and description",
            });
        }

        const departmentExist = await Department.findOne({ name: name });

        if (departmentExist) { 

            return res.status(400).json({

                success: false,
                message: "Department already exists",
            })
        }

        const newDepartment = await Department.create({

            name: name,
            description: description,
        });

        res.status(200).json({

            success: true,
            message: "Department added successfully",
            department: newDepartment,
        })

    } catch (error) {

        res.status(500).json({

            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }

}

export const getAllDeparments = async (req, res) => { 

    try {

        const allDepartments = await Department.find({});

        res.status(200).json({

            success: true,
            message: "Departments fetched successfully",
            data: allDepartments
        });
        
    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}