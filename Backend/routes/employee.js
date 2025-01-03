import express from 'express';
const router = express.Router();

import { addEmployeeData,getAllEmployeesData,getEmployeeDataById, updateEmployeeData,deleteEmployeeData } from '../controllers/Employee.js';
import { auth, isAdmin, isEmployee } from '../middleware/auth.js';
import multer from '../middleware/multer.js';

router.post('/add-employee', auth, isAdmin, multer.single('profileImage'), addEmployeeData);
router.get('/getAllEmployeesData', auth, isAdmin, getAllEmployeesData);
router.get('/getEmployeeDataById/:employeeId', auth, isAdmin, getEmployeeDataById);
router.put('/updateEmployeeData/:id', auth, isAdmin, updateEmployeeData);
router.delete('/deleteEmployee/:id', auth, isAdmin, deleteEmployeeData);

export default router;