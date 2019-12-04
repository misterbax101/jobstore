import { connect } from 'react-redux'

import {
    deleteVacancy,
    getUserVacancies,
} from '../../store/vacancies';
import {
    selectVacanciesCount,
    selectCurrentVacancies,
    selectVacanciesCurrentPage,
    selectVacanciesCurrentPageNumber
} from './../../store/pagination';
import { MyVacancies } from '../../components/vacancy';
import { AppState } from '../../store';
import { VacanciesQuery } from '../../types';

const mapStateToProps = (state: AppState, ownProps: any) => {

    return {
        vacancies: selectCurrentVacancies(state),
        loading: selectVacanciesCurrentPage(state).loading,
        totalCount: selectVacanciesCount(state),
        currentPage: selectVacanciesCurrentPageNumber(state),
    }
}


export default connect(mapStateToProps, {
    getVacancies: (page: number = 1, query: VacanciesQuery = {}) => getUserVacancies(page, 5, query),
    deleteVacancy
})(MyVacancies);