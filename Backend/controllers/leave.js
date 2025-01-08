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