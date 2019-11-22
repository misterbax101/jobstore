import { combineReducers } from 'redux';
import {
    GET_VACANCY,
    GET_VACANCIES_SUCCESS,
    CREATE_VACANCY_ERROR,
    CREATE_VACANCY_REQUEST,
    CREATE_VACANCY_SUCCESS,
    UPDATE_VACANCY_REQUEST,
    UPDATE_VACANCY_SUCCESS,
    UPDATE_VACANCY_ERROR,
    UpdateVacancyActions,
    CreateVacancyActions,
    GetVacancyActions,
    VacanciesState,
    VacancyState,
    UPDATE_VACANCY_RESET
} from './types'

const initialSate = {
    newVacancy: {
        isRequesting: false
    },
    items: {}
};


function newVacancyReducer(
    state = initialSate.newVacancy,
    action: CreateVacancyActions): VacancyState {
    switch (action.type) {
        case CREATE_VACANCY_REQUEST:
            return {
                ...initialSate.newVacancy,
                isRequesting: true,
            }
        case CREATE_VACANCY_SUCCESS:
            return {
                isRequesting: false,
                vacancyId: action.payload
            }
        case CREATE_VACANCY_ERROR:
            return {
                isRequesting: false,
                error: action.payload
            }
        default:
            return state

    }
}

function editVacancyReducer(
    state = initialSate.newVacancy,
    action: UpdateVacancyActions): VacancyState {
    switch (action.type) {
        case UPDATE_VACANCY_RESET:
                return {
                    ...initialSate.newVacancy
                }
        case UPDATE_VACANCY_REQUEST:
            return {
                ...initialSate.newVacancy,
                isRequesting: true,
            }
        case UPDATE_VACANCY_SUCCESS:
            return {
                isRequesting: false,
                success: action.payload
            }
        case UPDATE_VACANCY_ERROR:
            return {
                isRequesting: false,
                error: action.payload
            }
        default:
            return state

    }
}

function vacanciesReducer(
    state = initialSate.items,
    action: GetVacancyActions
): VacanciesState {
    switch (action.type) {
        case GET_VACANCY: {
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        }
        case GET_VACANCIES_SUCCESS: {
            let vacancies = {};
            for (let item of action.payload.data) {
                vacancies = {
                    ...vacancies,
                    [item.id]: item
                }
            }
            return {
                ...state,
                ...vacancies
            }
        }
        default:
            return state

    }
}

export default combineReducers({
    newVacancy: newVacancyReducer,
    editVacancy: editVacancyReducer,
    items: vacanciesReducer
})