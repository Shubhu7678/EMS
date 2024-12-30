import { configureStore } from '@reduxjs/toolkit'
import  authReducer  from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import departmentReducer from './slices/departmentSlice';

export const store = configureStore({

    reducer: {

        auth: authReducer,
        profile: profileReducer,
        department: departmentReducer
    }
});