import { AppState } from '../'

export const selectCurrencies = (state: AppState) => state.data.currencies;

export const selectVacancyTypes = (state: AppState) => state.data.vacancyTypes;