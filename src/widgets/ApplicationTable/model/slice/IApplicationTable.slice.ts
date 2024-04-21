import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {IApplicationTableSliceSchema} from '../types/IApplicationTableSliceSchema'
import {IApplication} from "../../../../entity/Application/model/types/IApplication";
import {initList} from "../lib/initState";



const initialState: IApplicationTableSliceSchema = {
    applicationList: initList,
    applicationListWithFilters: initList
};

export const ApplicationTableSlice = createSlice({
    name: 'ApplicationTable',
    initialState,
    reducers: {
        setApplicationList: (state, action: PayloadAction<IApplication[]>) => {
            state.applicationListWithFilters = action.payload;
            state.applicationList = action.payload;
        },
        setApplicationListWithFilters: (state, action: PayloadAction<IApplication[]>) => {
            state.applicationListWithFilters = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {actions: ApplicationTableSliceActions} = ApplicationTableSlice;
export const {reducer: ApplicationTableSliceReducer} = ApplicationTableSlice;
