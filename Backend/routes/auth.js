import express from 'express';
const router = express.Router();

import { auth, isAdmin, isEmployee} from '../middleware/auth.js';
import { login,changePassword, getDashboardOverview } from '../controllers/auth.js';

router.post('/login', login);
router.post('/changePassword', auth, isEmployee, changePassword);
router.get('/getDashboardOverview', auth, isAdmin, getDashboardOverview);


export default router;