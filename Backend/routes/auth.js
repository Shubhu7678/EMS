import express from 'express';
const router = express.Router();

import { login,changePassword } from '../controllers/auth.js';
import { auth, isEmployee} from '../middleware/auth.js';

router.post('/login', login);
router.post('/changePassword', auth, isEmployee, changePassword);


export default router;