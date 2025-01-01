import express from 'express';
const router = express.Router();

import { addEmployeeData } from '../controllers/Employee.js';
import { auth, isAdmin, isEmployee } from '../middleware/auth.js';
import multer from '../middleware/multer.js';

router.post('/add-employee',auth,isAdmin,multer.single('profileImage'), addEmployeeData);

export default router;