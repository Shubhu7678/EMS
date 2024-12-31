import express from 'express';
const router = express.Router();

import { auth, isAdmin, isEmployee } from '../middleware/auth.js';
import { addDepartment, getAllDeparments,getDepartmentById,updateDepartment,deleteDepartment } from '../controllers/department.js';


router.post('/add-department', auth, isAdmin, addDepartment);
router.get('/getAllDepartments', auth, isAdmin, getAllDeparments);
router.get('/getDepartmentById/:departmentId', auth, isAdmin, getDepartmentById);
router.put('/updateDepartment/:departmentId', auth, isAdmin, updateDepartment);
router.post('/deleteDepartment', auth, isAdmin, deleteDepartment);

export default router;