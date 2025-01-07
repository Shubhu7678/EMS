import Leave from "../models/Leave.js";
import Employee from "../models/Employee.js";

export const addLeave = async (req, res) => { 

    try {
        
        const userId = req.user._id;
        const { leaveType, startDate, endDate, reason } = req.body;

        if(!userId  || !leaveType || !startDate || !endDate || !reason) { 

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
            reason,
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