import { createSelector } from 'reselect';

import { AppState } from './../index'

const vacancies = (state: AppState) => state.vacancies.items;

const vacanciesPagination = (state: AppState) => state.pagination.vacancies;

export const selectVacanciesCount = (state: AppState) => state.pagination.vacancies.recordsCount;

export const selectVacanciesCurrentPage = (state: AppState) => {
    return state.pagination.vacancies.pages[state.pagination.vacancies.currentPage] || {
        ids: [],
        loading: false
    }
}

export const selectVacanciesCurrentPageNumber = (state: AppState) => state.pagination.vacancies.currentPage;

export const selectCurrentVacancies = createSelector(
    [vacancies, vacanciesPagination],
    (vacancies, vacanciesPagination) => {
        const currentPage = vacanciesPagination.pages[vacanciesPagination.currentPage];
        if (currentPage) {
            return currentPage.ids.map(id => vacancies[id]);
        }
        return [];
    }
);