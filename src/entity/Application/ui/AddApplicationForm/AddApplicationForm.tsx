import {FC, useCallback, useEffect} from 'react';
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Flex, TextInput, Button, TextArea, Select, Text} from "@gravity-ui/uikit";
import {ApplicationSliceActions} from "../../model/slice/IApplication.slice";
import {applicationStates, IApplication} from "../../model/types/IApplication";
import {useSelector} from "react-redux";
import {
    getApplicationComments,
    getApplicationDate,
    getApplicationId,
    getApplicationState,
    getATICode,
    getCarrierContactPhone,
    getCarrierFullName, getCompanyName
} from "../../model/selectors/application.selectors";

interface IAddApplicationForm {
    onSubmit: (application: IApplication) => void;
    deleteApplication?: (ATICod: string) => void
    application?: IApplication;
    buttonText: string
}

export const AddApplicationForm: FC<IAddApplicationForm> = (props) => {
    const {onSubmit, application, buttonText, deleteApplication}: IAddApplicationForm = props
    const dispatch = useAppDispatch()
    const ATICode = useSelector(getATICode)
    const applicationState = useSelector(getApplicationState)
    const id = useSelector(getApplicationId)
    const carrierContactPhone = useSelector(getCarrierContactPhone)
    const carrierFullName = useSelector(getCarrierFullName)
    const companyName = useSelector(getCompanyName)
    const comments = useSelector(getApplicationComments)
    const date = useSelector(getApplicationDate)

    useEffect(() => {
        if (application) {
            dispatch(ApplicationSliceActions.setApplication(application))
        }
    }, [dispatch]);

    const setCarrierContactPhone = useCallback((value: string) => {
        dispatch(ApplicationSliceActions.setCarrierContactPhone(value))
    }, [dispatch])

    const setCarrierFullName = useCallback((value: string) => {
        dispatch(ApplicationSliceActions.setCarrierFullName(value))
    }, [dispatch])

    const setComments = useCallback((value: string) => {
        dispatch(ApplicationSliceActions.setComments(value))
    }, [dispatch])

    const setCompanyName = useCallback((value: string) => {
        dispatch(ApplicationSliceActions.setCompanyName(value))
    }, [dispatch])

    const setATICode = useCallback((value: string) => {
        dispatch(ApplicationSliceActions.setATICode(value))
    }, [dispatch])

    const setApplicationState = useCallback((value: applicationStates) => {
        dispatch(ApplicationSliceActions.setApplicationState(value))
    }, [dispatch])

    return (
        <Flex direction={'column'} width={800} gap={2}>
            <TextInput value={companyName}
                       size={'xl'} placeholder={'Имя компании'}
                       onChange={(event) => setCompanyName(event.target.value)}/>

            <TextInput value={carrierContactPhone}
                       size={'xl'} placeholder={'Контактный телефон перевозчика'}
                       onChange={(event) => setCarrierContactPhone(event.target.value)}/>

            <TextInput value={carrierFullName}
                       size={'xl'} placeholder={'ФИО перевозчика'}
                       onChange={(event) => setCarrierFullName(event.target.value)}/>

            <TextArea value={comments}
                      size={'xl'} placeholder={'Комментарий'}
                      onChange={(event) => setComments(event.target.value)}/>

            <TextInput value={ATICode}
                       size={'xl'} placeholder={'ATICode'}
                       onChange={(event) => setATICode(event.target.value)}/>

            {application &&
                <Select value={[applicationState]}
                        onUpdate={(value) => setApplicationState(value[0] as applicationStates)}
                        placeholder={'Выбор состояния'} size={'xl'} width={'auto'}>
                    <Select.Option value={'new'}>Новая</Select.Option>
                    <Select.Option value={'inWork'}>В работе</Select.Option>
                    <Select.Option value={'completed'}>Выполнено</Select.Option>
                </Select>
            }

            {deleteApplication &&
                <Button size={'xl'} onClick={() => deleteApplication(id)}>
                    <Text color={'danger'}>Удалить заявку</Text>
                </Button>
            }

            <Button size={'xl'} onClick={() => onSubmit(
                {
                    ATICode: ATICode,
                    applicationState: applicationState,
                    carrierContactPhone: carrierContactPhone,
                    carrierFullName: carrierFullName,
                    comments: comments,
                    companyName: companyName,
                    date: date,
                    id: id
                }
            )}><Text>{buttonText}</Text></Button>
        </Flex>
    );
};
