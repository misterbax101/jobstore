import { connect } from 'react-redux'

import {
    deleteVacancy,
    getUserVacancies,
    selectVacanyByIds
} from '../../store/vacancies';
import { MyVacancies } from '../../components/vacancy';
import { AppState } from '../../store';
import { VacanciesQuery } from '../../types';

const mapStateToProps = (state: AppState, ownProps: any) => {
    const currentPage = state.pagination.vacancies.pages[state.pagination.vacancies.currentPage];
    if (currentPage) {
        return {
            vacancies: selectVacanyByIds(state, currentPage.ids),
            loading: currentPage.loading,
            totalCount: state.pagination.vacancies.recordsCount,
            currentPage: state.pagination.vacancies.currentPage,
            userId: state.auth.userId
        }
    }

    return {
        vacancies: [],
        loading: false,
        totalCount: 0,
        currentPage: 0,
        vacancyTypes: state.data.vacancyTypes,
    }
}


export default connect(mapStateToProps, {
    getVacancies:(page: number = 1, query: VacanciesQuery = {}) => getUserVacancies(page, 5, query),
    deleteVacancy
})(MyVacancies);