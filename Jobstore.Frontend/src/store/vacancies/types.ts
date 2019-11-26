import { Action } from '../types';
import { VacancyModel } from '../../models';


export const CREATE_VACANCY_REQUEST = 'CREATE_VACANCY_REQUEST';
export const CREATE_VACANCY_SUCCESS = 'CREATE_VACANCY_SUCCESS';
export const CREATE_VACANCY_ERROR = 'CREATE_VACANCY_ERROR';

export const GET_VACANCY = 'GET_VACANCY';


export type VacancyActions = Action<typeof CREATE_VACANCY_REQUEST, null> | Action<typeof CREATE_VACANCY_SUCCESS, number> |
                             Action<typeof CREATE_VACANCY_ERROR, string> | Action<typeof GET_VACANCY,VacancyModel>

export interface VacanciesState {
    newVacancy: {
        isRequesting: boolean,
        error?: string,
        vacancyId?: number
    },
    [key: number]: VacancyModel
}