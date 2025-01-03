import mongoose from 'mongoose';

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

const Department = mongoose.model('Department', departmentSchema);

export default Department;