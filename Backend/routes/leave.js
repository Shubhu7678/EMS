import express from 'express'
const router = express.Router();

import { auth, isEmployee, isAdmin } from '../middleware/auth.js';
import {
    addLeave,
    getAllLeaves,
    getEmployeeLeaves,
    getLeaveById,
    changeLeaveStatus,
    getEmployeeLeavesByEmployeeId,
 
} from '../controllers/leave.js';

router.post('/addLeave', auth, isEmployee, addLeave);
router.get('/getEmployeeLeaves/:userId', auth, isEmployee, getEmployeeLeaves);
router.get('/getAllLeaves', auth, isAdmin, getAllLeaves)
router.get('/getLeaveById/:leaveId', auth, isAdmin, getLeaveById);
router.post('/changeLeaveStatus',auth, isAdmin, changeLeaveStatus);
router.get('/getEmployeeLeavesByEmployeeId/:employeeId', auth, isAdmin, getEmployeeLeavesByEmployeeId);


export default router