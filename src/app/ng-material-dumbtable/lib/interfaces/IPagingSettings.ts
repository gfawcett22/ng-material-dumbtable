export interface IPagingSettings {
    enabled: boolean;
    currentPageNumber?: number;
    totalRecordCount?: number;
    defaultPageSize?: number;
    pageSizeValues?: number[];
}
