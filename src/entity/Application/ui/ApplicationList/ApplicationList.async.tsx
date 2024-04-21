import {ComponentType, lazy} from "react";
import {IApplicationListProps} from "./ApplicationList";

export const ApplicationListAsync = lazy<ComponentType<IApplicationListProps>>(
    async () => await import('./ApplicationList')
        .then((module) => ({default: module.ApplicationList})),
);
