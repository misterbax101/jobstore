import { connect } from 'react-redux'

import {
    getVacancy,
    selectVacancy
} from '../../../store/vacancies';
import VacancyDetails from './VacancyDetails';
import { AppState } from '../../../store';


const mapStateToProps = (state: AppState, ownProps: any) => {
    const { id } = ownProps.match.params;
    return {
        vacancy: selectVacancy(state, id)
    }
}

export default connect(mapStateToProps, {
    getVacancy,
})(VacancyDetails);