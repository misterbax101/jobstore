import { AppState } from './../index';

export const getCurrentPage = ({ pagination }: AppState) => {
    const currentPage = pagination.vacancies.pages[pagination.vacancies.currentPage];
    return currentPage || { ids: [], loading: false };
}

export const getTotalRecordsCount = ({ pagination }: AppState) => pagination.vacancies.recordsCount;

export const getCurrentPageRecords = (state: AppState) => {
    const page = getCurrentPage(state);
    if (page) {
        return page.ids.map(id => state.vacancies.items[id]);
    } else {
        return [];
    }
};