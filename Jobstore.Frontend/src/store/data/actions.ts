import axios from 'axios';

import { GET_CURRENCIES, GET_VACANCY_TYPES } from './types';
import {Currency, VacancyType } from '../../models';

export const getCurrencies = () => async (dispach:any) => {
    const response = await axios.get<Currency>('/currencies')
    dispach({ type: GET_CURRENCIES, payload: response.data });
}

export const getVacancyTypes = () => async (dispach:any) => {
    const response = await axios.get<VacancyType>('/vacancytypes')
    dispach({ type: GET_VACANCY_TYPES, payload: response.data });
}

