export type applicationStates = 'new' | 'inWork' | 'completed'

export interface IApplication {
    id: string;
    date: number;
    companyName: string;
    carrierFullName: string;
    carrierContactPhone: string;
    comments: string;
    applicationState: applicationStates;
    ATICode: string;
}
