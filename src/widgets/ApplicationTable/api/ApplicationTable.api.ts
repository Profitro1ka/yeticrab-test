import {rtkApi} from "../../../shared/api/rtkApi";
import {IApplication} from "../../../entity/Application";

export const ApplicationTableApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAllApplication: build.query<IApplication[], any>({
                query: () => ({
                    url: '/getAllApplication',
                    transformResponse: (applications: IApplication[]) => {
                        if(applications){
                            return []
                        }
                        return applications
                    }
                })
            }
        )
    })
})

export const useApplicationTableApi = ApplicationTableApi.useGetAllApplicationQuery;
