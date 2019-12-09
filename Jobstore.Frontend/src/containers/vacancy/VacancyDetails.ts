import { connect } from 'react-redux'

import {
    getVacancy,
    selectVacancy
} from '../../store/vacancies';
import { getVacancyTypes } from '../../store/data';
import VacancyDetails from '../../components/vacancy/VacancyDetails';
import { AppState } from '../../store';


const mapStateToProps = (state: AppState, ownProps: any) => {
    const { id } = ownProps.match.params;
    return {
        vacancy: selectVacancy(state, id),
        vacancyTypes: state.data.vacancyTypes,
    }
}

export default connect(mapStateToProps, {
    getVacancy,
    getVacancyTypes
})(VacancyDetails);