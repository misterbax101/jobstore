import {
    GET_CURRENCIES,
    GET_VACANCY_TYPES,
    DataState,
} from './types';

import {  ActionCreator, Action} from './../types';
import { Currency, VacancyType } from '../../types';

const initialState: DataState = {
    currencies: [],
    vacancyTypes: []
};

export function dataReducer(
    state = initialState,
    action: Action<typeof GET_CURRENCIES, Array<Currency>> | Action<typeof GET_VACANCY_TYPES, Array<VacancyType>>
): DataState {
    switch (action.type) {
        case GET_CURRENCIES:
            return {
                ...state,
                currencies: action.payload
            };
        case GET_VACANCY_TYPES:
            return {
                ...state,
                vacancyTypes: action.payload
            };
        default:
            return state;
    }
}