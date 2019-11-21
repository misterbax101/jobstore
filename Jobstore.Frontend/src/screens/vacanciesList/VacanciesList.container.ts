import { connect } from 'react-redux'

import {
    getVacancies,
    selectVacanyByIds
} from '../../store/vacancies';
import { getVacancyTypes } from '../../store/data';
import VacancyList from './VacanciesList';
import { AppState } from '../../store';
import { getPagesCount } from '../../untils/helper';
import { VacanciesQuery } from '../../types';

const PAGE_SIZE = 5;

const mapStateToProps = (state: AppState, ownProps: any) => {
    const currentPage = state.pagination.pages[state.pagination.currentPage];
    if (currentPage) {
        return {
            vacancies: selectVacanyByIds(state, currentPage.ids),
            loading: currentPage.loading,
            pagesCount: getPagesCount(state.pagination.recordsCount, PAGE_SIZE),
            vacancyTypes: state.data.vacancyTypes,
        }
    }

    return {
        vacancies: [],
        loading: false,
        pagesCount: 0,
        vacancyTypes: state.data.vacancyTypes
    }
}

export default connect(mapStateToProps, {
    getVacancies: (page: number = 1, query: VacanciesQuery = {}) => getVacancies(page, PAGE_SIZE, query),
    getVacancyTypes
})(VacancyList);