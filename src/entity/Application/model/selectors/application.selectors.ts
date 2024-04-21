import {StateSchema} from "../../../../app/providers/StoreProvider";

export const getATICode = (state: StateSchema) => state.application.ATICode
export const getApplicationState = (state: StateSchema) => state.application.applicationState
export const getApplicationId = (state: StateSchema) => state.application.id
export const getCarrierContactPhone = (state: StateSchema) => state.application.carrierContactPhone
export const getCarrierFullName = (state: StateSchema) => state.application.carrierFullName
export const getCompanyName = (state: StateSchema) => state.application.companyName
export const getApplicationComments = (state: StateSchema) => state.application.comments
export const getApplicationDate = (state: StateSchema) => state.application.date
