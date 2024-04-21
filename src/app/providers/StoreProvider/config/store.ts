import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {rtkApi} from "../../../../shared/api/rtkApi"
import {UserSliceReducer} from "../../../../entity/User";
import {ApplicationTableSliceReducer} from "../../../../widgets/ApplicationTable";
import {ApplicationSliceReducer} from "../../../../entity/Application";



export const createStore = () => {
    const rootReducers = {
        user: UserSliceReducer,
        applicationTable: ApplicationTableSliceReducer,
        application: ApplicationSliceReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    return configureStore({
        reducer: combineReducers(rootReducers),
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({}).concat(rtkApi.middleware),
    })
}


export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
