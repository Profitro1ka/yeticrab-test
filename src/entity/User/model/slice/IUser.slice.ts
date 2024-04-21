import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {IUserSliceSchema, roles} from '../types/IUserSliceSchema'


const initialState: IUserSliceSchema = {
    role: "user"
};

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setRole: (state, action: PayloadAction<roles>) => {
            state.role = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {actions: UserSliceActions} = UserSlice;
export const {reducer: UserSliceReducer} = UserSlice;
