import { connect } from 'react-redux'

import { AppState } from '../store';
import Home from '../components/Home'
import { getVacancies } from '../store/vacancies';

const PAGE_SIZE = 5;

const mapStateToProps = (state: AppState) => {
    return {
        vacancies: Object.values(state.vacancies.items)
    }
}

export default connect(mapStateToProps, {
    getVacancies: () => getVacancies(1, PAGE_SIZE, {}),
})(Home);