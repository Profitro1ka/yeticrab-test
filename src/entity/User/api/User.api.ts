import {IUserSliceSchema} from "../model/types/IUserSliceSchema";
import {rtkApi} from "../../../shared/api/rtkApi";



export const UserApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        user: build.query<IUserSliceSchema, any>({
                query: () => ({
                    url: '/user',
                })
            }
        )
    })
})

export const useUserApi = UserApi.useUserQuery;
