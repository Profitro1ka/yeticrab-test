import {StateSchema} from "../../../../app/providers/StoreProvider";


export const getApplicationList = (state: StateSchema) => state.applicationTable.applicationList
export const getApplicationListWithFilters = (state: StateSchema) => state.applicationTable.applicationListWithFilters
