import {IApplication} from "../../../../entity/Application/model/types/IApplication";

export interface IApplicationTableSliceSchema {
    applicationList: IApplication[];
    applicationListWithFilters: IApplication[]
}
