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

export const changePassword = async (req, res) => { 

    try {

        const userId = req.user._id;
        const { oldPassword, newPassword, confirmPassword } = req.body;

        if (!userId || !oldPassword || !newPassword || !confirmPassword) {

            return res.status(400).json({

                success: false,
                message: "All fields are required ",
            });
        }
        
        if (newPassword !== confirmPassword) { 

            return res.status(400).json({

                success: false,
                message: "New password and confirm password does not match",

            });
        }

        const userExist = await User.findById(userId);

        if (!userExist) { 

            return res.status(404).json({

                success: false,
                message: "User not found",
            });
        }

        const isMatched = await bcrypt.compare(oldPassword, userExist.password);

        if (!isMatched) { 

            return res.status(401).json({

                success: false,
                message: 'Password not matched'

            })
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        userExist.password = hashedPassword;

        await userExist.save();

        return res.status(200).json({

            success: true,
            message: "Password changed successfully",
        });
        
    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message,
        })
    }
}