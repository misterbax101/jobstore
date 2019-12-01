import React from 'react';
import { Col, Alert, Container } from 'reactstrap';
import { RouteComponentProps } from 'react-router-dom';

import { CreateVacancyModel, VacancyType, Currency, VacancyModel } from '../../types';
import VacancyForm from './vacancyForm/VacancyForm';
import Spinner from '../../components/base/Spinner';

// todo any
interface EditVacancyProps extends RouteComponentProps<any> {
    getCurrencies: () => void,
    getVacancyTypes: () => void,
    getVacancy: (id: number) => void,
    updateVacancy: (id: number, data: CreateVacancyModel) => any,
    reset: () => void,
    currencies: Array<Currency>,
    vacancyTypes: Array<VacancyType>
    vacancy: VacancyModel,
    loading: boolean,
    error?: string,
    success?: string,
}

class EditVacancy extends React.Component<EditVacancyProps, {}>{
    componentDidMount() {
        this.props.reset();
        const { vacancy, getVacancy, getCurrencies, getVacancyTypes } = this.props;
        const { id } = this.props.match.params;
        if (!vacancy) {
            getVacancy(id);
        }
        getCurrencies();
        getVacancyTypes();
    }

    onFormSubmit = (values: CreateVacancyModel) => {
        const { id } = this.props.match.params;
        this.props.updateVacancy(id, values);
    }

    render() {
        const { vacancy, currencies, vacancyTypes, error, success } = this.props;
    
        return (
                <Container>
                    <Col>
                        <h2>Edit vacancy</h2>
                    </Col>
                    <Col>
                       {!vacancy && <Spinner loading={true} />}
                        {error && <Alert color='danger'>{error}</Alert>}
                        {success && <Alert color='success'>{success}</Alert>}
                        <VacancyForm
                            initialValues={vacancy}
                            onSubmit={this.onFormSubmit}
                            currencies={currencies}
                            vacancyTypes={vacancyTypes}
                        />
                    </Col>
                </Container>
        );
    }
}

export default EditVacancy;