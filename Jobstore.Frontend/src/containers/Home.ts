import { connect } from 'react-redux'

import { AppState } from '../store';
import Home from '../components/Home'
import { getCurrentPageRecords, getCurrentPage } from './../store/pagination/selectors';
import { searchVacancies } from '../store/vacancies';

const PAGE_SIZE = 5;

const mapStateToProps = (state: AppState) => {
    return {
        vacancies: getCurrentPageRecords(state),
        loading: getCurrentPage(state).loading,
    }
}

export default connect(mapStateToProps, {
    searchVacancies: (query?: string) => searchVacancies(1, PAGE_SIZE, query),
})(Home);