import {
    GET_CURRENCIES,
    GET_VACANCY_TYPES,
    DataState,
    GetAllItemsAction,
} from './types';

import { Currency, VacancyType } from '../../models';

const initialState: DataState = {
    currencies: [],
    vacancyTypes: []
};

export function dataReducer(
    state = initialState,
    action: GetAllItemsAction<typeof GET_CURRENCIES, Currency> | GetAllItemsAction<typeof GET_VACANCY_TYPES, VacancyType>
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