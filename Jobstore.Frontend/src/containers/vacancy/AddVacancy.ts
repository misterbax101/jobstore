import { connect } from 'react-redux';

import {
    getCurrencies,
    getVacancyTypes,
    selectCurrencies,
    selectVacancyTypes
} from '../../store/data';
import AddVacancy from '../../components/vacancy/AddVacancy';
import { createVacancy, selectNewVacancy } from '../../store/vacancies';
import { AppState } from '../../store'

const mapStateToProps = (state: AppState) => ({
    currencies: selectCurrencies(state),
    vacancyTypes: selectVacancyTypes(state),
    loading: selectNewVacancy(state).isRequesting,
    error: selectNewVacancy(state).error,
    vacancyId: selectNewVacancy(state).vacancyId
})

export default connect(mapStateToProps, {
    getCurrencies,
    getVacancyTypes,
    createVacancy
})(AddVacancy);