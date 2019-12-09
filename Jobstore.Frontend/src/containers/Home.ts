import { connect } from 'react-redux'

import { AppState } from '../store';
import Home from '../components/Home'
import {
    selectCurrentVacancies,
    selectVacanciesCurrentPage,
} from './../store/pagination';
import { searchVacancies } from '../store/vacancies';

const PAGE_SIZE = 5;

const mapStateToProps = (state: AppState) => {

        return {
            vacancies: selectCurrentVacancies(state),
            loading: selectVacanciesCurrentPage(state).loading,
        }
}

export default connect(mapStateToProps, {
    searchVacancies: (query?: string) => searchVacancies(1, PAGE_SIZE,query),
})(Home);