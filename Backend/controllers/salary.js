import Employee from "../models/Employee.js";
import Salary from "../models/Salary.js";


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

export const addSalaryData = async (req, res) => { 

    try {

        const { employeeId, basicSalary, allowances, deduction, payDate } = req.body;

        if (!employeeId || !basicSalary || !allowances || !deduction || !payDate) { 

            return res.status(401).json({

                success: false,
                message : 'All fields are required'
            })
        }

        const netSalary = parseInt(basicSalary) + parseInt(allowances) - parseInt(deduction);

        const salary = await Salary.create({
            userId: employeeId,
            basicSalary,
            allowances,
            deduction,
            netSalary,
            payDate
        });

        return res.status(200).json({

            success: true,
            message : 'Salary account created successfully'
        })

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: 'Internal Server Error',
            error : error.message,
        })
    }
}