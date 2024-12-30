import express from 'express';
const router = express.Router();

import { auth, isAdmin, isEmployee } from '../middleware/auth.js';
import { addDepartment, getAllDeparments } from '../controllers/department.js';


router.post('/add-department', auth, isAdmin, addDepartment);
router.get('/getAllDepartments', auth, isAdmin, getAllDeparments);

export default router;