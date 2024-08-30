import { createSlice } from '@reduxjs/toolkit';


const dealerSlice = createSlice({
    name: 'dealer',
    initialState: {
        dealerInfo: null,
        isAuthenticated: false
    },
    reducers: {
        setDealerInfo: (state, action) => {
            state.dealerInfo = action.payload;
            state.isAuthenticated = true;
        },
        clearDealerInfo: (state) => {
            state.dealerInfo = null;
            state.isAuthenticated = true;
        },
    },
});

export const {dealerInfo, isAuthenticated, setDealerInfo, clearDealerInfo } = dealerSlice.actions;
export default dealerSlice.reducer;