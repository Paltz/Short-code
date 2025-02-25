import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IAuthState {
    fname: string;
    mname: string;
    lname: string;
    leader: boolean;
}
  
const initialState: IAuthState = {
    fname: '',
    mname: '',
    lname: '',
    leader: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<Partial<IAuthState>>) => {
            return { ...state, ...action.payload };
        },
        clearAuthData: () => initialState
    },
});

export const { setAuthData, clearAuthData } = authSlice.actions;

export default authSlice.reducer;