import { AppState } from '../'

export const selectVacancy = (state: AppState, id: number) => state.vacancies.items[id];

export const selectVacancies = (state: AppState) => Object.values(state.vacancies.items);

export const selectVacanyByIds = (state: AppState, ids: Array<number>)  => ids.map(id => state.vacancies.items[id]);

export const selectEditVacancy = (state: AppState) => state.vacancies.editVacancy;