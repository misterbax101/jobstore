import React from 'react';
import { Col, Alert } from 'reactstrap';
import { RouteComponentProps } from 'react-router-dom';

import { VacancyModel, VacancyType, Currency } from '../../types';
import VacancyForm from './vacancyForm1/VacancyForm';
import resouces from '../../translations';

const fromInitalValues: VacancyModel = {
    id: 0,
    companyName: '',
    description: '',
    salaryCurrency: '',
    title: '',
    typeId: 0
}

interface AddVacancyProps extends RouteComponentProps {
    getCurrencies: () => void,
    getVacancyTypes: () => void,
    createVacancy: (data: VacancyModel) => any,
    currencies: Array<Currency>,
    vacancyTypes: Array<VacancyType>
    loading: boolean,
    error?: string,
}

class AddVacancy extends React.Component<AddVacancyProps, {}>{
    componentDidMount() {
        this.props.getCurrencies();
        this.props.getVacancyTypes();
    }

    onFormSubmit = (values: VacancyModel) => {
        this.props.createVacancy(values);
    }

    render() {
        const { title } = resouces.addVacancy;
        return (
            <React.Fragment>
                <Col>
                    <h2>{title}</h2>
                </Col>
                {this.props.error && <Alert color='danger'>{this.props.error}</Alert>}
                 <VacancyForm 
                      initialValues={fromInitalValues}
                      onSubmit={this.onFormSubmit}
                      currencies={this.props.currencies}
                      vacancyTypes={this.props.vacancyTypes}
                   />
            </React.Fragment>
        );
    }
}

export default AddVacancy;