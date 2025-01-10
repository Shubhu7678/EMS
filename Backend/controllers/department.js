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

       return res.status(200).json({

            success: true,
            message: "Department added successfully",
            data : newDepartment,
        })

    } catch (error) {

       return res.status(500).json({

            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }

}

export const getAllDeparments = async (req, res) => { 

    try {

        const allDepartments = await Department.find({});

       return res.status(200).json({

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

export const getDepartmentById = async (req, res) => { 

    try {

        const { departmentId } = req.params;

        if (!departmentId) { 

           return res.status(400).json({

                success: false,
                message: "Please provide department id",
            });
        }

        const departmentData = await Department.findById(departmentId);

        if (!departmentData) { 

           return res.status(404).json({

                success: false,
                message: "Department not found",
            });
        }

       return res.status(200).json({

            success: true,
            message: "Department fetched successfully",
            data: departmentData
        });

    } catch (error) { 

       return res.status(500).json({

            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

export const updateDepartment = async (req, res) => { 

    try {
        
        const { departmentId } = req.params;

        const departmentData = await Department.findById(departmentId);
        console.log(departmentData);
        if(!departmentData) { 

            return res.status(404).json({

                success: false,
                message: "Department not found",
            });
        }
        const { department_name: name, department_description: description } = req.body;
        console.log(req.body);
        if (name !== undefined) { 

            departmentData.name = name;
        }
        if (description!== undefined) { 

            departmentData.description = description;
        }

       const updatedDepartment = await departmentData.save();

       return res.status(200).json({

            success: true,
            message: "Department updated successfully",
            data: updatedDepartment
        });

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

export const deleteDepartment = async (req, res) => {

    try {
        
        const { departmentId } = req.body;

        if (!departmentId) { 

           return res.status(400).json({

                success: false,
                message: "Please provide department id",
            });
        }

        const departmentData = await Department.findById(departmentId);
        await departmentData.deleteOne();

        if (!departmentData) { 

           return res.status(404).json({

                success: false,
                message: "Department not found",
            });
        }

       return res.status(200).json({

            success: true,
           message: "Department deleted successfully",
            data : departmentData
        });

    } catch (error) { 

       return res.status(500).json({

            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}