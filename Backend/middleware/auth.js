
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
export const auth = (req, res, next) => { 

    try {

        const token = req.header("Authorization").replace("Bearer ", "");

        if (!token) { 

             return res.status(401).json({

                success: false,
                message: 'Access denied. No token provided'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();

    } catch (error) { 

        return res.status(400).json({

            success: false,
            message: 'Invalid token',
            error : error.message,
        });
    }
}

export const admin = (req, res, next) => { 

    try {
         
        if (req.user.role !== 'admin') { 

            return res.status(403).json({

                success: false,
                message: 'Access denied this route is only for admin'
            });
        }

        next();

    } catch (error) { 

        return res.status(400).json({

            success: false,
            message: 'Invalid token',
            error : error.message,
        });
    }
}

export const isEmployee = (req, res, next) => {

    try {

        if (req.user.role !== 'employee') { 

            return res.status(403).json({

                success: false,
                message: 'Access denied this route is only for employee'
            });
        }

        next();

    } catch (error) { 

        return res.status(400).json({

            success: false,
            message: 'Invalid token',
            error : error.message,
        });
    }
 }