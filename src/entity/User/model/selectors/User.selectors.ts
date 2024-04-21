import {StateSchema} from "../../../../app/providers/StoreProvider";


export const getRole = (state: StateSchema) => state.user?.role
