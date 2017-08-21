import { IPagingSettings } from './IPagingSettings';

export interface ITableSettings {
    columns: any;
    sortColumn: string;
    noResultsMessage?: string;
    showActionButtons: boolean;
    paging: IPagingSettings;
}
