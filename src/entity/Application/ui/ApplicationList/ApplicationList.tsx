import {FC,useState} from "react";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {IApplication} from "../../model/types/IApplication";
import {Table, Modal} from "@gravity-ui/uikit";
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {AddApplicationForm} from "../AddApplicationForm/AddApplicationForm";
import {useSelector} from "react-redux";
import {getRole} from "../../../User/model/selectors/User.selectors";
import {columns} from "../../model/lib/columsConfig";
import {ApplicationSliceActions} from "../../model/slice/IApplication.slice";

export interface IApplicationListProps {
    applications: IApplication[]
    isLoading?: boolean
    deleteApplication: (ATICod: string) => void
    editApplication: (Application: IApplication) => void
    open: boolean
    setOpen: (value: boolean) => void
}

export const ApplicationList: FC<IApplicationListProps> = (props) => {
    const {applications, isLoading, editApplication, deleteApplication, open, setOpen}: IApplicationListProps = props
    const dispatch = useAppDispatch()
    const [currentApplication, setCurrentApplication] = useState<IApplication>()
    const isAdmin = useSelector(getRole) === 'admin'

    const onRowClick = (item: IApplication) => {
        setCurrentApplication(item)
        if (isAdmin) {
            setOpen(true)
        }
    }

    return (
        <>
            <Table wordWrap={true} emptyMessage={'заявок нет('} onRowClick={onRowClick} columns={columns} data={applications}/>

            <Modal open={open} onClose={() => {
                dispatch(ApplicationSliceActions.setInitState())
                setOpen(false)
            }}>
                <AddApplicationForm
                    application={currentApplication}
                    onSubmit={editApplication}
                    buttonText={'Изменить'}
                    deleteApplication={deleteApplication}/>
            </Modal>
        </>
    );
};

