import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    departmentList: [],
    department: [],
    editDepartment : false,
}

const departmentSlice = createSlice({

    name: 'department',
    initialState: initialState,
    reducers: {

        setDepartmentList : (state, action) => {

            state.departmentList = action.payload;
        },

        setDepartment : (state, action) => {

            state.department = action.payload;
        },

        setEditDepartment : (state, action) => {

            state.editDepartment = action.payload;            
        },
    }
})

export const { setDepartmentList, setDepartment, setEditDepartment } = departmentSlice.actions;

export default departmentSlice.reducer;