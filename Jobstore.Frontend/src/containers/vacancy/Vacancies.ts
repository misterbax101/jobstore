import { connect } from 'react-redux'

import {
    getVacancies,
    selectVacanyByIds
} from '../../store/vacancies';
import { getVacancyTypes } from '../../store/data';
import VacancyList from '../../components/vacancy/Vacancies';
import { AppState } from '../../store';
import { VacanciesQuery } from '../../types';

const mapStateToProps = (state: AppState, ownProps: any) => {
    const currentPage = state.pagination.vacancies.pages[state.pagination.vacancies.currentPage];
    if (currentPage) {
        return {
            vacancies: selectVacanyByIds(state, currentPage.ids),
            loading: currentPage.loading,
            totalCount: state.pagination.vacancies.recordsCount,
            vacancyTypes: state.data.vacancyTypes,
        }
    }

    return {
        vacancies: [],
        loading: false,
        totalCount: 0,
        vacancyTypes: state.data.vacancyTypes
    }
}

export default connect(mapStateToProps, {
    getVacancies: (page: number = 1, pageSize: number, query: VacanciesQuery = {}) => getVacancies(page, pageSize, query),
    getVacancyTypes
})(VacancyList);