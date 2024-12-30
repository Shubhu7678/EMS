
import express from 'express';
import connectDB from './config/database.js';
const app = express();
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

import authRoutes from './routes/auth.js';
import departmentRoutes from './routes/department.js';

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/department', departmentRoutes);

const port = process.env.PORT || 4000;
connectDB();
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
