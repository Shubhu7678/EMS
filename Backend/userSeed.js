import User from './models/User.js';
import bcrypt from 'bcrypt';
import connectDB from './config/database.js'
import dotenv from "dotenv";

dotenv.config();
const userRegister = async() => { 

    try {
        await connectDB();

        const hashedPassword = await bcrypt.hash('1234', 10);
        const newUser = await User.create({
            name: 'Shubham',
            email: 'shubhamaswal7678@gmail.com',
            password: hashedPassword,
            role: 'admin',
        })
        console.log("User Created Successfully", newUser);


    } catch (error) { 

        console.log("Error in user Seed", error);
    }
}

userRegister();