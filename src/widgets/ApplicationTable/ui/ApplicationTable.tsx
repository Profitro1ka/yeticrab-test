import {FC, useCallback, useState} from 'react';
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    AddApplicationForm,
    ApplicationList,
    ApplicationSliceActions,
    IApplication
} from "../../../entity/Application";
import {useSelector} from "react-redux";
import {getApplicationList, getApplicationListWithFilters} from "../model/selectors/ApplicationTable.selectors";
import {Button, Flex, Modal, Text} from "@gravity-ui/uikit";
import {ApplicationTableSliceActions} from "../model/slice/IApplicationTable.slice";
import {getRole} from "../../../entity/User/model/selectors/User.selectors";
import {SearchBar} from "../../../features/SearchBar";


export const ApplicationTable: FC = () => {
    const dispatch = useAppDispatch()
    const applicationList: IApplication[] = useSelector(getApplicationList)
    const applicationListWithFilters: IApplication[] = useSelector(getApplicationListWithFilters)
    //const {data: applicationList} = useApplicationApi({})

    const isAdmin = useSelector(getRole) === 'admin'

    const [open, setOpen] = useState<boolean>(false);
    const [openAdd, setOpenAdd] = useState<boolean>(false);


    const onSubmit = useCallback((application: IApplication) => {
        dispatch(ApplicationTableSliceActions.setApplicationList(applicationList.concat(application)))
        dispatch(ApplicationSliceActions.setInitState())
        setOpen(false)
    }, [dispatch, applicationList])

    const editApplication = (application: IApplication) => {
        const fixArray = applicationList.map((value: IApplication) => {
            if (value.id === application.id) {
                return application
            }

            return value
        })

        setOpenAdd(false)
        dispatch(ApplicationTableSliceActions.setApplicationList(fixArray))
    }

    const deleteApplication = (id: string) => {
        const fixArray = applicationList.filter(
            (value: IApplication) => value.id !== id
        )

        setOpenAdd(false)
        dispatch(ApplicationTableSliceActions.setApplicationList(fixArray))
    }

    return (
        <Flex width={'100%'} alignItems={'center'} direction={"column"} gap={'5'}>
            <Text>Найдено заявок: {applicationListWithFilters.length}</Text>

            <SearchBar applicationList={applicationList}/>

            <ApplicationList setOpen={setOpenAdd} open={openAdd} editApplication={editApplication}
                             deleteApplication={deleteApplication} applications={applicationListWithFilters}/>

            {isAdmin && <Button onClick={() => setOpen(true)}>Добавить заявку</Button>}

            <Modal open={open} onClose={() => {
                dispatch(ApplicationSliceActions.setInitState())
                setOpen(false)
            }
            }>
                <AddApplicationForm
                    onSubmit={onSubmit}
                    buttonText={'Создать'}/>
            </Modal>
        </Flex>
    );
};


