import { Currency, VacancyType } from '../../models';


export interface DataState {
    currencies: Array<Currency>,
    vacancyTypes: Array<VacancyType>

}

export const GET_CURRENCIES = 'GET_CURRENCIES';

export const GET_VACANCY_TYPES = 'GET_VACANCY_TYPES';


export interface GetAllItemsAction<ActionType, ItemType> {
    type: ActionType,
    payload: Array<ItemType>
}
