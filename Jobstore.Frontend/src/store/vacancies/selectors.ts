import { AppState } from '../'

export const selectVacancy = (state: AppState, id: number) => state.vacancies[id];