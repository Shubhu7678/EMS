
import express from 'express';
import connectDB from './config/database.js';
const app = express();
import cors from 'cors';
import dotenv from "dotenv";
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();

import authRoutes from './routes/auth.js';
import departmentRoutes from './routes/department.js';
import employeeRoutes from './routes/employee.js';

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/department', departmentRoutes);
app.use('/api/v1/employee', employeeRoutes);

const port = process.env.PORT || 4000;
connectDB();
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
