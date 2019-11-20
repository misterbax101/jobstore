import {
    GET_VACANCY,
    GET_VACANCIES_SUCCESS,
    CREATE_VACANCY_ERROR,
    CREATE_VACANCY_REQUEST,
    CREATE_VACANCY_SUCCESS,
    VacancyActions,
    VacanciesState
} from './types'

const initialSate: VacanciesState = {
    newVacancy: {
        isRequesting: false
    },
    items: {}
};

export function vacanciesReducer(
    state = initialSate,
    action: VacancyActions
): VacanciesState {
    switch (action.type) {
        case CREATE_VACANCY_REQUEST:
            return {
                ...state,
                newVacancy: {
                    isRequesting: true,
                }
            }
        case CREATE_VACANCY_SUCCESS:
            return {
                ...state,
                newVacancy: {
                    isRequesting: false,
                    vacancyId: action.payload
                }
            }
        case CREATE_VACANCY_ERROR:
            return {
                ...state,
                newVacancy: {
                    isRequesting: false,
                    error: action.payload
                }
            }
        case GET_VACANCY: {
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: action.payload
                }
            }
        }
        case GET_VACANCIES_SUCCESS: {
            let vacancies = {};
            for (let item of action.payload) {
                vacancies = {
                    ...vacancies,
                    [item.id]: item
                }
            }
            return {
                ...state,
                items: {
                    ...state.items,
                    ...vacancies
                }
            }
        }
        default:
            return state

    }
}