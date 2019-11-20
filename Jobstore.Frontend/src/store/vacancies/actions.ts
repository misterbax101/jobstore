import axios from 'axios'

import {
    GET_VACANCY,
    GET_VACANCIES_SUCCESS,
    CREATE_VACANCY_REQUEST,
    CREATE_VACANCY_SUCCESS,
    CREATE_VACANCY_ERROR
} from './types';
import { ActionCreator } from '../types';
import { CreateVacancyModel, VacancyModel, ListResponse } from '../../models';
import { history } from '../../untils/history';

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

export const getVacancies = (skip: number, take: number) => async (dispatch: any) => {
    try {
        const { data } = await axios.get<ListResponse<VacancyModel>>(`/vacancies?skip=${skip}&take=${take}`);
        dispatch(ActionCreator<typeof GET_VACANCIES_SUCCESS, Array<VacancyModel>>(GET_VACANCIES_SUCCESS, data.data))
    }
    catch {

    }
}
