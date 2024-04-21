import {FC, useEffect, useState} from 'react';
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {IApplication} from "../../../entity/Application";
import {Flex, TextInput, Select, Checkbox, Text} from "@gravity-ui/uikit";
import {ApplicationTableSliceActions} from "../../../widgets/ApplicationTable/model/slice/IApplicationTable.slice";

export interface ISearchBarProps {
    applicationList: IApplication[]
}

type a = 'companyName' | 'carrierFullName' | 'id' | 'ATICode'

export const SearchBar: FC<ISearchBarProps> = (props) => {
    const {applicationList}: ISearchBarProps = props
    const dispatch = useAppDispatch()
    const [selectOption, setSelectOption] = useState<string>('companyName')
    const [inputValue, setInputValue] = useState<string>('')
    const [hideCompleted, setHideCompleted] = useState<boolean>(false)

    useEffect(() => {
        const fixArray = applicationList.filter((value) => {
            if (value.applicationState === 'completed' && hideCompleted) {
                return false
            }

            return value[selectOption as a].startsWith(inputValue);
        })

        dispatch(ApplicationTableSliceActions.setApplicationListWithFilters(fixArray))
    }, [dispatch, inputValue, selectOption, applicationList, hideCompleted]);

    return (
        <Flex width={"60%"} alignItems={'center'} gap={'2'}>
            <TextInput size={'xl'} placeholder={'Поиск по фильтру'} onChange={event => setInputValue(event.target.value)}/>

            <Select size={'xl'} placeholder={'Выбрать фильтр'} value={[selectOption]}
                    onUpdate={(value) => setSelectOption(value[0])}>
                <Select.Option value={'companyName'}>Название компании</Select.Option>
                <Select.Option value={'carrierFullName'}>ФИО поставщика</Select.Option>
                <Select.Option value={'ATICode'}>ATICode</Select.Option>
                <Select.Option value={'id'}>id</Select.Option>
            </Select>

            <Checkbox checked={hideCompleted} onChange={() => setHideCompleted(!hideCompleted)} size={'l'}><Text
                whiteSpace={'nowrap'}>Скрыть выполненые</Text></Checkbox>
        </Flex>
    );
};


