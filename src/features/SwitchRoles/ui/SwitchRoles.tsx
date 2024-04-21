import {FC, useCallback, useState} from 'react';
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Button} from "@gravity-ui/uikit";
import {useSelector} from "react-redux";
import {getRole} from "../../../entity/User/model/selectors/User.selectors";
import {roles} from "../../../entity/User/model/types/IUserSliceSchema";
import {UserSliceActions} from "../../../entity/User";



export const SwitchRoles: FC = () => {
    const dispatch = useAppDispatch()
    const role: roles = useSelector(getRole)
    const [buttonText, setButtonText] = useState<string>('Получить админку')


    const switchRole = useCallback((role: roles) => {
        if (role === 'user') {
            setButtonText('Выйти из админки')
            dispatch(UserSliceActions.setRole('admin'))
        }
        else {
            setButtonText('Получить админку')
            dispatch(UserSliceActions.setRole('user'))
        }
    }, [dispatch])

    return (
        <>
            <Button onClick={() => switchRole(role)}>{buttonText}</Button>
        </>
    );
};


