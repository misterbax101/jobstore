import { AppState } from '../'

export const selectVacancy = (state: AppState, id: number) => state.vacancies.items[id];

export const selectVacancies = (state: AppState) => Object.values(state.vacancies.items);