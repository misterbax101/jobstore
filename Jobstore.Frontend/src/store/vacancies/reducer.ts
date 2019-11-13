import {
    GET_VACANCY,
    CREATE_VACANCY_ERROR,
    CREATE_VACANCY_REQUEST,
    CREATE_VACANCY_SUCCESS,
    VacancyActions,
    VacanciesState
} from './types'

const initialSate: VacanciesState = {
    newVacancy: {
        isRequesting: false
    }
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
                [action.payload.id]: action.payload
            }
        }
        default:
            return state

    }
}