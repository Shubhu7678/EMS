import mongoose from 'mongoose';

const salarySchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    basicSalary: {
        type: Number,
        required: true,
    },
    allowances: {
        type: Number,
        required: true,
    },
    deduction: {
        type: Number,
        required: true,
    },
    netSalary: {
        type: Number,
        required: true,
    },
    payDate: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
    });

const Salary = mongoose.model('Salary', salarySchema);

export default Salary;