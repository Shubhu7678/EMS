import { createSlice } from "@reduxjs/toolkit"


const initialState = {

    employeeList: [],
    employee: [],
    editEmployee: false,
    loading : false,
}

const employeeSlice = createSlice({

    name: 'employee',
    initialState: initialState,
    reducers: {

        setEmployeeList: (state, action) => {

            state.employeeList = action.payload;
        },
        setEmployee: (state, action) => {
            
            state.employee = action.payload;
        },
        setEditEmployee: (state, action) => {
            
            state.editEmployee = action.payload;
        },
        setLoading: (state, action) => {
            
            state.loading = action.payload;
        }
    }
});

export const { setEmployeeList, setEmployee, setEditEmployee, setLoading } = employeeSlice.actions;

export default employeeSlice.reducer;