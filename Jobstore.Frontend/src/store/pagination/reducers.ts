import { Action } from './../types';

import { PaginationState } from './types';
import { PaginatioData } from '../../types';

export function pages<DateT, KeyT, fetchingActionT, successActionT>(fetchingAction: fetchingActionT, successAction: successActionT, idPropery: keyof DateT) {
    return (state: PaginationState<KeyT> = {}, action: Action<fetchingActionT, number> | Action<successActionT, PaginatioData<DateT>>): PaginationState<KeyT> => {
        switch (action.type) {
            case fetchingAction: {
                return {
                    ...state,
                    [action.payload as number]: {
                        ids: [],
                        loading: true
                    }
                }
            }
            case successAction: {
                const payload = action.payload as PaginatioData<DateT>;
                return {
                    ...state,
                    [payload.page]: {
                        ids: payload.data.map(item => item[idPropery]) as Array<KeyT> | [],
                        loading: false
                    }
                }
            }
            default:
                return state;
        }
    }
}

// export const vacanciesPages = (state: PaginationState<number> = {}, action: GetVacancyActions) => {
//     switch (action.type) {
//         case GET_VACANCIES_REQUEST: {
//             return {
//                 ...state,
//                 [action.payload]: {
//                     ids: [],
//                     loading: true
//                 }
//             }
//         }
//         case GET_VACANCIES_SUCCESS: {
//             return {
//                 ...state,
//                 [action.payload.page]: {
//                     ids: action.payload.data.map(item => item.id),
//                     loading: false
//                 }
//             }
//         }
//         default:
//             return state;
//     }
// }

// export const currentPage = (currentPage = 1, action: GetVacancyActions) =>
//     action.type === GET_VACANCIES_REQUEST ? action.payload : currentPage

export function currentPage<T, P>(fetchingAction: T) {
    return (currentPage = 1, action: Action<T, P>) => action.type === fetchingAction ? action.payload : currentPage;
}

export function recordsCount<T, P>(successAction: T) {
    return (count = 0, action: Action<T, PaginatioData<P>>) => action.type === successAction ? action.payload.totalCount : count;
}

// export const recordsCount = (count = 0, action: GetVacancyActions) =>
//     action.type === GET_VACANCIES_SUCCESS ? action.payload.totalCount : count

