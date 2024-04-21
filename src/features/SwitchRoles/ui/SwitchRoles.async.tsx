import {ComponentType, lazy} from "react";

export const SwitchRolesAsync = lazy<ComponentType>(
    async () => await import('./SwitchRoles')
        .then((module) => ({default: module.SwitchRoles})),
);
