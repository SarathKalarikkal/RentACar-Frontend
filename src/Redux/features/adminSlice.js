import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
       adminInfo: null,
        isAuthenticated: false,
    },
    reducers: {
        setAdminInfo: (state, action) => {
            state.adminInfo = action.payload;
            state.isAuthenticated = true;
        },
        clearAdminInfo: (state) => {
            state.adminInfo = null;
            state.isAuthenticated = false;
        },
    },
});

export const {adminInfo,isAuthenticated, setAdminInfo, clearAdminInfo } = adminSlice.actions;
export default adminSlice.reducer;