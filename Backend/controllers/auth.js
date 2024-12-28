import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => { 

    try {

        // console.log(req.body); 
        const { email, password } = req.body;

        if (!email || !password) { 

            return res.status(400).json({

                success: false,
                message: "Please provide email and password",
            });
        }

        const userExist = await User.findOne({ email: email });

        if (!userExist) { 

            return res.status(404).json({

                success: false,
                message: "User not found",
            });
        }

        const isMatched = await bcrypt.compare(password, userExist.password);

        if (!isMatched) { 

            return res.status(401).json({

                success: false,
                message: 'Password not matched'
            });
        }
         
        const payload = {
            _id: userExist._id,
            name: userExist.name,
            email: userExist.email,
            role: userExist.role,

        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' }); 
        userExist.password = undefined;
        
        res.status(200).json({

            success: true,
            message: "Login Success",
            token,
            data : userExist,
        })

    } catch (error) { 

        res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message,
        })
    }
}