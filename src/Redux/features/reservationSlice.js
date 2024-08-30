import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({
    name: 'reservation',
    initialState: {
        userReservationList: [],
        dealerReservationList: [],
    },
    reducers: {
        setUserReservationList: (state, action) => {
            state.userReservationList = action.payload;
        },
        setDealerReservationList: (state, action) => {
            state.dealerReservationList = action.payload;
        },
    },
});

export const {userReservationList, setUserReservationList,dealerReservationList, setDealerReservationList } = reservationSlice.actions;
export default reservationSlice.reducer;