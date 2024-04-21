import {rtkApi} from "../../../shared/api/rtkApi";
import {applicationStates} from "../model/types/IApplication";

interface IApplicationArgs {
    id: string
    date?: number;
    companyName: string;
    carrierFullName: string;
    carrierContactPhone: string;
    comments: string;
    applicationState: applicationStates;
    ATICode: string;
}


export const ApplicationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        editApplication: build.mutation<any, IApplicationArgs>({
                query: (applicationArgs: IApplicationArgs) => ({
                    url: '/editApplication/' + applicationArgs.id,
                    method: "UPDATE",
                    body: JSON.stringify(applicationArgs),
                })
            }
        ),
        deleteApplication: build.query<any, string>({
                query: (id: string) => ({
                    url: '/deleteApplication/' + id,
                    method: "DElET",
                })
            }
        ),
        addApplication: build.mutation<any, IApplicationArgs>({
                query: (applicationArgs: IApplicationArgs) => ({
                    url: '/editApplication',
                    method: "POST",
                    body: JSON.stringify(applicationArgs),
                })
            }
        ),
    })
})

export const useApplicationApi = ApplicationApi;
