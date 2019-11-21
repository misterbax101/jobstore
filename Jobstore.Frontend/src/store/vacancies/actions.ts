import axios from 'axios'
import { stringify } from  'querystring';

import {
    GET_VACANCY,
    GET_VACANCIES_REQUEST,
    GET_VACANCIES_SUCCESS,
    CREATE_VACANCY_REQUEST,
    CREATE_VACANCY_SUCCESS,
    CREATE_VACANCY_ERROR
} from './types';
import { ActionCreator } from '../types';
import { CreateVacancyModel, VacancyModel, PaginatioData, VacanciesQuery } from '../../types';
import { history } from '../../untils/history';
import { calculateSkip } from '../../untils/helper' 

export const createVacancy = (data: CreateVacancyModel) => async (dispach: any) => {
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
        const skip = calculateSkip(page,pageSize);
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
