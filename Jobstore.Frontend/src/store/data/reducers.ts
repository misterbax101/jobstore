import { combineReducers } from 'redux';

import {
    GET_CURRENCIES,
    GET_VACANCY_TYPES,
} from './types';

import {  PayloadAction} from '../types';
import { Currency, VacancyType } from '../../types';

const currenciesInitialState: Array<Currency> = [];

function currenciesReducer(
    state =currenciesInitialState,
    action: PayloadAction<typeof GET_CURRENCIES, Array<Currency>>
): Array<Currency> {
    switch (action.type) {
        case GET_CURRENCIES:
            return action.payload;
        default:
            return state;
    }
}

const vacancyTypesInitialState: Array<VacancyType> = [];

function vacancyTypesReducer(
    state = vacancyTypesInitialState,
    action: PayloadAction<typeof GET_VACANCY_TYPES, Array<VacancyType>>
): Array<VacancyType> {
    switch (action.type) {
        case GET_VACANCY_TYPES:
            return  action.payload
            ;
        default:
            return state;
    }
}

export default combineReducers({
    currencies: currenciesReducer,
    vacancyTypes: vacancyTypesReducer
});