import React from 'react';
import { connect } from 'react-redux';

import {
    getCurrencies,
    getVacancyTypes
} from '../../../store/data/actions';
import Currency from '../../../models/Currency';
import VacancyType from '../../../models/VacancyType';
import { AppState } from '../../../store';

interface AddNewVacancyProps {
    getCurrencies: () => void,
    getVacancyTypes: () => void,
    currencies: Array<Currency>,
    vacancyTypes: Array<VacancyType>
}


class AddNewVacancy extends React.Component<AddNewVacancyProps, {}>{
    componentWillMount() {
        this.props.getCurrencies();
        this.props.getVacancyTypes();
    }

    render() {
        return (
            <div>
                {this.props && this.props.currencies.map(c =>
                <div>{c.code} - {c.description}</div>)}
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    currencies: state.data.currencies,
    vacancyTypes: state.data.vacancyTypes
})

export default connect(mapStateToProps, {
    getCurrencies,
    getVacancyTypes
})(AddNewVacancy);