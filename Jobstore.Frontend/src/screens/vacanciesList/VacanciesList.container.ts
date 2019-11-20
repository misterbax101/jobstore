import { connect } from 'react-redux'

import {
    getVacancies,
    selectVacancies
} from '../../store/vacancies';
import VacancyList from './VacanciesList';
import { AppState } from '../../store';


const mapStateToProps = (state: AppState, ownProps: any) => {
    return {
        vacancies: selectVacancies(state)
    }
}

export default connect(mapStateToProps, {
    getVacancies,
})(VacancyList);