import { connect } from 'react-redux';

import {
    getCurrencies,
    getVacancyTypes
} from '../../store/data/actions';
import AddVacancy from './AddVacancy';
import { createVacancy } from '../../store/vacancies/actions';
import { AppState } from '../../store'

const mapStateToProps = (state: AppState) => ({
    currencies: state.data.currencies,
    vacancyTypes: state.data.vacancyTypes,
    loading: state.vacancies.newVacancy.isRequesting,
    error: state.vacancies.newVacancy.error,
    vacancyId: state.vacancies.newVacancy.vacancyId
})

export default connect(mapStateToProps, {
    getCurrencies,
    getVacancyTypes,
    createVacancy
})(AddVacancy);