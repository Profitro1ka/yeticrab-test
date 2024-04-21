import {IUserSliceSchema} from "../../../../entity/User/model/types/IUserSliceSchema";
import {rtkApi} from "../../../../shared/api/rtkApi";
import {IApplicationTableSliceSchema} from "../../../../widgets/ApplicationTable";
import {IApplication} from '../../../../entity/Application'

export interface StateSchema {
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    user: IUserSliceSchema;
    applicationTable: IApplicationTableSliceSchema;
    application: IApplication
}

export type StateSchemaKeys = keyof StateSchema;


