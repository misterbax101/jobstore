import { connect } from 'react-redux';

import {
    getCurrencies,
    getVacancyTypes
} from '../../store/data/actions';
import EditVacancy from '../../components/vacancy/EditVacancy';
import { updateVacancy, getVacancy } from '../../store/vacancies/actions';
import { AppState } from '../../store'
import { selectVacancy ,UPDATE_VACANCY_RESET } from '../../store/vacancies';
import { ActionCreator } from '../../store/types';

const mapStateToProps = (state: AppState, ownProps: any) => {
    const { id } = ownProps.match.params;
    return {
        vacancy: selectVacancy(state, id),
        currencies: state.data.currencies,
        vacancyTypes: state.data.vacancyTypes,
        loading: state.vacancies.editVacancy.isRequesting,
        error: state.vacancies.editVacancy.error,
        success: state.vacancies.editVacancy.success,
        vacancyId: state.vacancies.editVacancy.vacancyId
    }
}

const mapDispachToProps = {
    getCurrencies,
    getVacancyTypes,
    getVacancy,
    updateVacancy,
    reset: () => ActionCreator<typeof UPDATE_VACANCY_RESET,null>(UPDATE_VACANCY_RESET, null)
};

export default connect(mapStateToProps,mapDispachToProps )(EditVacancy);