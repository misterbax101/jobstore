import { connect } from 'react-redux'

import { AppState } from '../store';
import Home from '../components/Home'
import { searchVacancies, selectVacanyByIds } from '../store/vacancies';

const PAGE_SIZE = 5;

const mapStateToProps = (state: AppState) => {

    const currentPage = state.pagination.vacancies.pages[state.pagination.vacancies.currentPage];
    if (currentPage) {
        return {
            vacancies: selectVacanyByIds(state, currentPage.ids),
            loading: currentPage.loading,
        }
    }

    return {
        vacancies: [],
        loading: false,
    }
}

export default connect(mapStateToProps, {
    searchVacancies: (query?: string) => searchVacancies(1, PAGE_SIZE,query),
})(Home);