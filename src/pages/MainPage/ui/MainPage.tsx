import {FC, useEffect} from 'react';
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {SwitchRoles} from "../../../features/SwitchRoles";
import {ApplicationTable} from "../../../widgets/ApplicationTable";
import {UserSliceActions, useUserApi} from "../../../entity/User";

interface IMainPageProps {
}

export const MainPage: FC<IMainPageProps> = () => {
    const props: IMainPageProps = {}
    const {data: user} = useUserApi({})
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(user) {
            dispatch(UserSliceActions.setRole(user.role))
        }
    }, [dispatch, user]);

    return (
        <>
            <SwitchRoles/>
            <ApplicationTable/>
        </>
    );
};


