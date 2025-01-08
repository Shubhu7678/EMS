import express from 'express'
const router = express.Router();

import { auth, isEmployee, isAdmin } from '../middleware/auth.js';
import { addLeave,getEmployeeLeaves} from '../controllers/leave.js';

router.post('/addLeave', auth, isEmployee, addLeave);
router.get('/getEmployeeLeaves/:userId',auth,isEmployee,getEmployeeLeaves);

export default router