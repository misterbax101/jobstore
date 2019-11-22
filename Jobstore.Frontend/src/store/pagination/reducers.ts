import { combineReducers } from 'redux';

import {
    GetVacancyActions,
    GET_VACANCIES_REQUEST,
    GET_VACANCIES_SUCCESS
} from '../vacancies/types';
import { PaginationState } from './types';


const vacanciesPages = (state: PaginationState<number> = {}, action: GetVacancyActions) => {
    switch (action.type) {
        case GET_VACANCIES_REQUEST: {
            return {
                ...state,
                [action.payload]: {
                    ids: [],
                    loading: true
                }
            }
        }
        case GET_VACANCIES_SUCCESS: {
            return {
                ...state,
                [action.payload.page]: {
                    ids: action.payload.data.map(item => item.id),
                    loading: false
                }
            }
        }
        default:
            return state;
    }
}

const currentPage = (currentPage = 1, action: GetVacancyActions) =>
    action.type === GET_VACANCIES_REQUEST ? action.payload : currentPage

const recordsCount = (count = 0, action: GetVacancyActions) =>
    action.type === GET_VACANCIES_SUCCESS ? action.payload.totalCount : count

export default combineReducers({
    pages: vacanciesPages,
    currentPage: currentPage,
    recordsCount: recordsCount
})
