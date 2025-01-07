import { configureStore } from '@reduxjs/toolkit'
import  authReducer  from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import departmentReducer from './slices/departmentSlice';
import employeeReducer from './slices/employeeSlice';
import leaveReducer from './slices/leaveSlice';

export const store = configureStore({

    reducer: {

        auth: authReducer,
        profile: profileReducer,
        department: departmentReducer,
        employee: employeeReducer,
        leave : leaveReducer,
    }
});