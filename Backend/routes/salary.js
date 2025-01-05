import express from 'express';
const router = express.Router();
import { auth , isAdmin } from '../middleware/auth.js';
import { getAllEmployeesByDepartmentId,addSalaryData } from '../controllers/salary.js'; 

router.get('/getAllEmployeesByDepartmentId/:departmentId', auth, isAdmin, getAllEmployeesByDepartmentId);
router.post('/addSalary', auth, isAdmin, addSalaryData);

export default router;