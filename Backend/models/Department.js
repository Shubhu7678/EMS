import mongoose from 'mongoose';
import Employee from './Employee.js';
import Leave from './Leave.js';
import Salary from './Salary.js';

const departmentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
        trim : true,
    },
    description: {

        type: String,
        required: true,
        trim : true,
    },
    employees: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Employee'
        }
    ],
},
    {
        timestamps: true
    }
)

departmentSchema.pre('deleteOne', { document: true, query: false }, async function (next) { 

    try {

        const employees = await Employee.find({ departmentId: this._id })
        const empIds = employees.map((employee) => employee._id);
        const userIds = employees.map((employee) => employee.userId);
         
        await User.deleteMany({_id : {$in : userIds}})
        await Employee.deleteMany({ _id: { $in: empIds } });
        await Leave.deleteMany({ employeeId: { $in: empIds } });
        await Salary.deleteMany({ employeeId: { $in: empIds } });
        next();

        
    } catch (error) { 

        next(error);
    }
})

const Department = mongoose.model('Department', departmentSchema);

export default Department;