import axios from 'axios'
import { stringify } from 'querystring';

import {
    GET_VACANCY,
    GET_VACANCIES_REQUEST,
    GET_VACANCIES_SUCCESS,
    CREATE_VACANCY_REQUEST,
    CREATE_VACANCY_SUCCESS,
    CREATE_VACANCY_ERROR,
    UPDATE_VACANCY_REQUEST,
    UPDATE_VACANCY_SUCCESS,
    UPDATE_VACANCY_ERROR
} from './types';
import { ActionCreator } from '../types';
import { VacancyModel, PaginatioData, VacanciesQuery } from '../../types';
import { history } from '../../untils/history';
import { calculateSkip } from '../../untils/helper'
import resource from '../../translations';

export const createVacancy = (data: VacancyModel) => async (dispach: any) => {
    try {
        dispach(ActionCreator<typeof CREATE_VACANCY_REQUEST, null>(CREATE_VACANCY_REQUEST, null))
        const response = await axios.post<number>('/vacancies', data);
        dispach(ActionCreator<typeof CREATE_VACANCY_SUCCESS, number>(CREATE_VACANCY_SUCCESS, response.data))
        history.push(`/vacancies/${response.data}`)
    }
    catch (err) {
        dispach(ActionCreator<typeof CREATE_VACANCY_ERROR, string>(CREATE_VACANCY_ERROR, err.data))
    }
}

export const updateVacancy = (id: number, data: VacancyModel) => async (dispach: any) => {
    try {
        dispach(ActionCreator<typeof UPDATE_VACANCY_REQUEST, null>(UPDATE_VACANCY_REQUEST, null))
        await axios.put(`/vacancies/${id}`, data);
        dispach(ActionCreator<typeof UPDATE_VACANCY_SUCCESS, string>(UPDATE_VACANCY_SUCCESS, resource.editVacancy.successMessage))
    }
    catch (err) {
        dispach(ActionCreator<typeof UPDATE_VACANCY_ERROR, string>(UPDATE_VACANCY_ERROR, err.data))
    }
}

export const getVacancy = (id: number) => async (dispatch: any) => {
    try {
        const response = await axios.get<VacancyModel>(`/vacancies/${id}`);
        dispatch(ActionCreator<typeof GET_VACANCY, VacancyModel>(GET_VACANCY, response.data))
    }
    catch (err) {
        console.log(err);
    }
}

export const getVacancies = (page: number, pageSize: number, query: VacanciesQuery = {}) => async (dispatch: any) => {
    try {
        dispatch(ActionCreator<typeof GET_VACANCIES_REQUEST, number>(GET_VACANCIES_REQUEST, page));
        const skip = calculateSkip(page, pageSize);
        const { data } = await axios.get<PaginatioData<VacancyModel>>(`/vacancies`, {
            params: {
                skip: skip,
                take: pageSize,
                ...query
            },
            paramsSerializer: (parms) => stringify(parms)
        });
        dispatch(ActionCreator<typeof GET_VACANCIES_SUCCESS, PaginatioData<VacancyModel>>(GET_VACANCIES_SUCCESS, { ...data, page: page }))
    }
    catch {

    }
}

export const searchVacancies = (page: number, pageSize: number, query?: string) => async (dispatch: any) => {
    try {
        dispatch(ActionCreator<typeof GET_VACANCIES_REQUEST, number>(GET_VACANCIES_REQUEST, page));
        const skip = calculateSkip(page, pageSize);
        const { data } = await axios.get<PaginatioData<VacancyModel>>(`/vacancies/search`, {
            params: {
                skip: skip,
                take: pageSize,
                query: query || ''
            },
            paramsSerializer: (parms) => stringify(parms)
        });
        dispatch(ActionCreator<typeof GET_VACANCIES_SUCCESS, PaginatioData<VacancyModel>>(GET_VACANCIES_SUCCESS, { ...data, page: page }))
    }
    catch {

    }
}
