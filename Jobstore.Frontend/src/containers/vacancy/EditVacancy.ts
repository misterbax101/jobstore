import { connect } from 'react-redux';

import {
    getCurrencies,
    getVacancyTypes,
    selectCurrencies,
    selectVacancyTypes
} from '../../store/data';
import {
    updateVacancy,
    getVacancy,
    selectEditVacancy,
    selectVacancy,
    UPDATE_VACANCY_RESET
} from '../../store/vacancies';
import { AppState } from '../../store'
import { ActionCreator } from '../../store/types';
import EditVacancy from '../../components/vacancy/EditVacancy';

const mapStateToProps = (state: AppState, ownProps: any) => {
    const { id } = ownProps.match.params;
    return {
        vacancy: selectVacancy(state, id),
        currencies: selectCurrencies(state),
        vacancyTypes: selectVacancyTypes(state),
        loading: selectEditVacancy(state).isRequesting,
        error: selectEditVacancy(state).error,
        success: selectEditVacancy(state).success,
        vacancyId: selectEditVacancy(state).vacancyId
    }
}

const mapDispachToProps = {
    getCurrencies,
    getVacancyTypes,
    getVacancy,
    updateVacancy,
    reset: () => ActionCreator<typeof UPDATE_VACANCY_RESET, null>(UPDATE_VACANCY_RESET, null)
};

export default connect(mapStateToProps, mapDispachToProps)(EditVacancy);