import { Action } from '../types';
import { VacancyModel, PaginatioData } from '../../types';


export const CREATE_VACANCY_RESET = 'CREATE_VACANCY_RESET';
export const CREATE_VACANCY_REQUEST = 'CREATE_VACANCY_REQUEST';
export const CREATE_VACANCY_SUCCESS = 'CREATE_VACANCY_SUCCESS';
export const CREATE_VACANCY_ERROR = 'CREATE_VACANCY_ERROR';


export const UPDATE_VACANCY_RESET = 'UPDATE_VACANCY_RESET';
export const UPDATE_VACANCY_REQUEST = 'UPDATE_VACANCY_REQUEST';
export const UPDATE_VACANCY_SUCCESS = 'UPDATE_VACANCY_SUCCESS';
export const UPDATE_VACANCY_ERROR = 'UPDATE_VACANCY_ERROR';

export const GET_VACANCY = 'GET_VACANCY';

export const GET_VACANCIES_REQUEST = 'GET_VACANCIES_REQUEST';
export const GET_VACANCIES_SUCCESS = 'GET_VACANCIES_SUCCESS';


export type CreateVacancyActions = Action<typeof CREATE_VACANCY_REQUEST, null> |
    Action<typeof CREATE_VACANCY_SUCCESS, number> |
    Action<typeof CREATE_VACANCY_ERROR, string>   |
    Action<typeof CREATE_VACANCY_RESET, null>;

export type UpdateVacancyActions = Action<typeof UPDATE_VACANCY_REQUEST, null> |
    Action<typeof UPDATE_VACANCY_SUCCESS,string> |
    Action<typeof UPDATE_VACANCY_ERROR, string>  |
    Action<typeof UPDATE_VACANCY_RESET, null>;


export type GetVacancyActions = Action<typeof GET_VACANCY, VacancyModel> |
    Action<typeof GET_VACANCIES_REQUEST, number> |
    Action<typeof GET_VACANCIES_SUCCESS, PaginatioData<VacancyModel>>

export interface VacanciesState {
    [key: number]: VacancyModel
}


export interface VacancyState {
    isRequesting: boolean,
    error?: string,
    vacancyId?: number,
    success?: string

}