import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authenticated: false,
        walletAddress: '',
        owner: false
    },
    reducers: {
        selectAuthenticated: (state, action) => {
            state.authenticated = action.payload;
        },
        selectWalletAddress: (state, action) => {
            state.walletAddress = action.payload;
        },
        selectOwner: (state, action) => {
            state.owner = action.payload;
        }
    }
});

export const {
    selectAuthenticated,
    selectWalletAddress,
    selectOwner,
} = authSlice.actions;
export default authSlice.reducer;