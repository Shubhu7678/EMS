import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    leaveList: [],
    leave: [],
    acceptedLeaves: [],
    rejectedLeaves: [],
    pendingLeaves: [],
    editLeave: false,
    loading : false,
}

const leaveSlice = createSlice({
    name: 'leave',
    initialState: initialState,
    reducers: {

        setLeaveList: (state, action) => {

            state.leaveList = action.payload;
        },
        setLeave: (state, action) => {

            state.leave = action.payload;
        },
        setAcceptedLeaves: (state, action) => {
            
            state.acceptedLeaves = action.payload;
        },
        setRejectedLeaves: (state, action) => {
            
            state.rejectedLeaves = action.payload;
        },
        setPendingLeaves: (state, action) => {
            
            state.pendingLeaves = action.payload;
        },
        setEditLeave: (state, action) => {            

            state.editLeave = action.payload;
        },
        setLoading: (state, action) => {

            state.loading = action.payload;
        },

    }
})

export const { setLeaveList, setLeave, setEditLeave, setLoading } = leaveSlice.actions;

export default leaveSlice.reducer;

