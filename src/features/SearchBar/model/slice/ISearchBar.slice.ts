import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {ISearchBarSliceSchema} from '../types/ISearchBarSliceSchema'


const initialState: ISearchBarSliceSchema = {
    test: ''
};

export const SearchBarSlice = createSlice({
    name: 'SearchBar',
    initialState,
    reducers: {
        testReducer: (state, action: PayloadAction<string>) => {
            state.test = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {actions: SearchBarSliceActions} = SearchBarSlice;
export const {reducer: SearchBarSliceReducer} = SearchBarSlice;
