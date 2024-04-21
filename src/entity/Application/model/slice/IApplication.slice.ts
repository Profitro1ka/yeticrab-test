import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {applicationStates, IApplication} from '../types/IApplication'
import {createUid} from "../../utils/createUid";


const initialState: IApplication = {
    ATICode: "",
    applicationState: 'new',
    carrierContactPhone: "",
    carrierFullName: "",
    comments: "",
    companyName: "",

    //const
    date: Date.now(),
    id: createUid()
};

export const ApplicationSlice = createSlice({
    name: 'Application',
    initialState,
    reducers: {
        setInitState: (state) => {
            return  initialState
        },
        setApplication: (state,action: PayloadAction<IApplication>) => {
            return action.payload
        },
        setATICode: (state, action: PayloadAction<string>) => {
            state.ATICode = action.payload
        },
        setApplicationState: (state, action: PayloadAction<applicationStates>) => {
            state.applicationState = action.payload
        },
        setCarrierContactPhone: (state, action: PayloadAction<string>) => {
            state.carrierContactPhone = action.payload
        },
        setCarrierFullName: (state, action: PayloadAction<string>) => {
            state.carrierFullName = action.payload
        },
        setComments: (state, action: PayloadAction<string>) => {
            state.comments = action.payload
        },
        setCompanyName: (state, action: PayloadAction<string>) => {
            state.companyName = action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const {actions: ApplicationSliceActions} = ApplicationSlice;
export const {reducer: ApplicationSliceReducer} = ApplicationSlice;
