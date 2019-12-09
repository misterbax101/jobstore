import { PayloadAction } from '../types';
import { VacancyModel, PaginatioData } from '../../types';


export const CREATE_VACANCY_RESET = 'CREATE_VACANCY_RESET';
export const CREATE_VACANCY_REQUEST = 'CREATE_VACANCY_REQUEST';
export const CREATE_VACANCY_SUCCESS = 'CREATE_VACANCY_SUCCESS';
export const CREATE_VACANCY_ERROR = 'CREATE_VACANCY_ERROR';


export const UPDATE_VACANCY_RESET = 'UPDATE_VACANCY_RESET';
export const UPDATE_VACANCY_REQUEST = 'UPDATE_VACANCY_REQUEST';
export const UPDATE_VACANCY_SUCCESS = 'UPDATE_VACANCY_SUCCESS';
export const UPDATE_VACANCY_ERROR = 'UPDATE_VACANCY_ERROR';

export const DELETE_VACANCY_REQUEST = 'DELETE_VACANCY_REQUEST';
export const DELETE_VACANCY_SUCCESS = 'DELETE_VACANCY_SUCCESS';
export const DELETE_VACANCY_ERROR = 'DELETE_VACANCY_ERROR';

export const GET_VACANCY = 'GET_VACANCY';

export const GET_VACANCIES_REQUEST = 'GET_VACANCIES_REQUEST';
export const GET_VACANCIES_SUCCESS = 'GET_VACANCIES_SUCCESS';


export type CreateVacancyActions = PayloadAction<typeof CREATE_VACANCY_REQUEST, null> |
    PayloadAction<typeof CREATE_VACANCY_SUCCESS, number> |
    PayloadAction<typeof CREATE_VACANCY_ERROR, string>   |
    PayloadAction<typeof CREATE_VACANCY_RESET, null>;

export type UpdateVacancyActions = PayloadAction<typeof UPDATE_VACANCY_REQUEST, null> |
    PayloadAction<typeof UPDATE_VACANCY_SUCCESS,string> |
    PayloadAction<typeof UPDATE_VACANCY_ERROR, string>  |
    PayloadAction<typeof UPDATE_VACANCY_RESET, null>;


export type GetVacancyActions = 
    PayloadAction<typeof GET_VACANCY, VacancyModel> |
    PayloadAction<typeof GET_VACANCIES_REQUEST, number> |
    PayloadAction<typeof GET_VACANCIES_SUCCESS, PaginatioData<VacancyModel>> |
    PayloadAction<typeof DELETE_VACANCY_SUCCESS, number> 


export interface VacanciesState {
    [key: number]: VacancyModel
}


export interface VacancyState {
    isRequesting: boolean,
    error?: string,
    vacancyId?: number,
    success?: string

}