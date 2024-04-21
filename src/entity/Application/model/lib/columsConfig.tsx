import {TableColumnConfig} from "@gravity-ui/uikit";
import {IApplication} from "../types/IApplication";

export const columns: TableColumnConfig<IApplication>[] = [
    {
        name: 'Номер заявки',
        id: 'id',
        align: "center",
    },
    {
        name: 'Название компании',
        id: 'companyName',
        align: "center",

    },
    {
        name: 'Дата регистрации заявки',
        id: 'date',
        align: "center",
        template: item => {
            const d = new Date(item.date)
            const date = [d.getDate(), d.getMonth() + 1, d.getFullYear()]
            const time = [d.getHours(), d.getMinutes()]

            return date.join('.') + " " + time.join(':')
        },
    },
    {
        name: 'ФИО поставщика',
        id: 'carrierFullName',
        align: "center",
    },
    {
        name: 'Контактный номер поставщика',
        id: 'carrierContactPhone',
        align: "center",
    },
    {
        name: 'Комментирии',
        id: 'comments',
        align: "center",
    },
    {
        name: 'ATICode',
        id: 'ATICode',
        template: item => {
            return (<a href={'https://ati.su/firms/' + item.ATICode + '/info'}>{item.ATICode}</a>)
        },
        align: "center",
    },
    {
        name: 'Состояние',
        id: 'applicationState',
        align: "center",
        template: item => {
            switch (item.applicationState){
                case 'inWork':
                    return 'В работе'
                case 'new':
                    return 'Новая'
                case 'completed':
                    return 'Выполнено'
            }
        },
    },
]
