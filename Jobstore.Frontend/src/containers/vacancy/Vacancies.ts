import { connect } from 'react-redux'

import {
    getVacancies,
} from '../../store/vacancies';
import {
    selectVacanciesCount,
    selectCurrentVacancies,
    selectVacanciesCurrentPage,
    selectVacanciesCurrentPageNumber
} from './../../store/pagination';
import { getVacancyTypes, selectVacancyTypes } from '../../store/data';
import VacancyList from '../../components/vacancy/Vacancies';
import { AppState } from '../../store';
import { VacanciesQuery } from '../../types';

const mapStateToProps = (state: AppState, ownProps: any) => {
        return {
            vacancies: selectCurrentVacancies(state),
            loading: selectVacanciesCurrentPage(state).loading,
            totalCount: selectVacanciesCount(state),
            currentPage: selectVacanciesCurrentPageNumber(state),
            vacancyTypes: selectVacancyTypes(state),
        }
}

export default connect(mapStateToProps, {
    getVacancies: (page: number = 1, query: VacanciesQuery = {}) => getVacancies(page, 5, query),
    getVacancyTypes
})(VacancyList);