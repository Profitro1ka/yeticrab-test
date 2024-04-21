import {ComponentType, lazy} from "react";

export const ApplicationTableAsync = lazy<ComponentType>(
    async () => await import('./ApplicationTable')
        .then((module) => ({default: module.ApplicationTable})),
);
