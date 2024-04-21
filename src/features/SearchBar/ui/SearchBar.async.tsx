import {ComponentType, lazy} from "react";
import {ISearchBarProps} from "./SearchBar";

export const SearchBarAsync = lazy<ComponentType<ISearchBarProps>>(
    async () => await import('./SearchBar')
        .then((module) => ({default: module.SearchBar})),
);
