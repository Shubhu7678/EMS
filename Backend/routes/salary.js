import express from 'express';
const router = express.Router();
import { auth , isAdmin } from '../middleware/auth.js';
import { getAllEmployeesByDepartmentId } from '../controllers/salary.js'; 

router.get('/getAllEmployeesByDepartmentId/:departmentId', auth, isAdmin, getAllEmployeesByDepartmentId);

export default router;