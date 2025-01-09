import Leave from "../models/Leave.js";
import Employee from "../models/Employee.js";
import mongoose from "mongoose";

export const addLeave = async (req, res) => { 

    try {
        
        const userId = req.user._id;
        const { leaveType, startDate, endDate, description } = req.body;
        console.log(req.body);
        console.log(userId);

        if(!userId  || !leaveType || !startDate || !endDate || !description) { 

            return res.status(400).json({

                success: false,
                message: "All fields are required"
            })
        }
        
        const employeeDetails = await Employee.findOne({ userId: userId });
        
        const leaveData = await Leave.create({
            employeeId: employeeDetails._id,
            leaveType,
            startDate,
            endDate,
            reason: description,
        });

        return res.status(200).json({

            success: true,
            message: "Leave added successfully",
            data: leaveData
        });
    

    } catch (error) { 

        console.log("Error Occured : ", error);
        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export const getEmployeeLeaves = async (req, res) => { 

    try {
           
        const { userId }  = req.params;

        if (!userId) { 

            return res.status(401).json({

                success: false,
                message: "User Id is required"
            })
        }

        const employeeData = await Employee.findOne({ userId: userId });

        const employeeLeaves = await Leave.find({ employeeId: employeeData._id });

        return res.status(200).json({

            success: true,
            message: "Leaves fetched successfully",
            data: employeeLeaves
        });

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export const getAllLeaves = async (req, res) => { 

    try {

        const allLeavesData = await Leave.find({})
            .populate({
                path: 'employeeId',
                populate: [
                    { path: 'userId' },
                    { path: 'departmentId' }
            ],
            });
        
        return res.status(200).json({
            
            success: true,
            message: "Leaves fetched successfully",
            data: allLeavesData
        })

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export const getLeaveById = async (req, res) => { 

    try {

        const { leaveId } = req.params;

        if (!leaveId) { 

            return res.status(401).json({

                success: false,
                message: "Leave Id is required"
            })
        }

        const leaveData = await Leave.findById(leaveId)
            .populate({
                path: 'employeeId',
                populate: [
                    { path: 'userId' },
                    { path: 'departmentId' },
                ]
            });
        
        return res.status(200).json({
            
            success: true,
            message: "Leave fetched successfully",
            data: leaveData
        })
        
    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export const changeLeaveStatus = async (req, res) => { 

    try {

        const { leaveId, leaveStatus } = req.body;

        if (!leaveId || !leaveStatus) { 

            return res.status(401).json({

                success: false,
                message: "Leave Id is required"
            })
        }

        const leaveData = await Leave.findByIdAndUpdate(leaveId,
            {
                status: leaveStatus
            },
            { new: true }
        )

        if (!leaveData) { 

            return res.status(404).json({
                
                success: false,
                message: "Leave not found"
            })
        }

        const updatedLeaveData = await leaveData.populate({
            path: 'employeeId',
            populate: [
                { path: 'userId' },
                { path: 'departmentId' }
            ]
        });

        return res.status(200).json({
            
            success: true,
            message: "Leave status updated successfully",
            data: updatedLeaveData

        })

    } catch (error) { 

        console.log("Error occured in changeLeaveType", error);
        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }

}

export const getEmployeeLeavesByEmployeeId = async (req, res) => { 

    try {
        
        const { employeeId } = req.params;
        console.log(employeeId);

        if (!employeeId) { 

            return res.status(401).json({

                success: false,
                message : "Employee Id is required"
            })
        }

        const employeeData = await Leave.find({ employeeId: employeeId });

        if (employeeData.length === 0) { 

            console.log("No data found");
        }
        console.log(employeeData);

        return res.status(200).json({

            success: true,
            message: "Leaves fetched successfully",
            data: employeeData
        })

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: 'Internal Server Error',
            error: error
        })
    }
} 