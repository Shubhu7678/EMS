import express from 'express';
const router = express.Router();
import { auth, isAdmin,isEmployee } from '../middleware/auth.js';
import { getAllEmployeesByDepartmentId, addSalaryData, getSalaryHistory,getEmployeeSalaryHistory } from '../controllers/salary.js';

router.get('/getAllEmployeesByDepartmentId/:departmentId', auth, isAdmin, getAllEmployeesByDepartmentId);
router.post('/addSalary', auth, isAdmin, addSalaryData);
router.get('/getSalaryHistory/:employeeId', auth, isAdmin, getSalaryHistory);
router.get('/getEmployeeSalaryByEmployeeId/:userId', auth, isEmployee, getEmployeeSalaryHistory);

export default router;