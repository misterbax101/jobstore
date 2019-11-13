import React from 'react';
import { connect } from 'react-redux';
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik';
import { FormGroup, Button, Label, Spinner, Alert, InputGroup, InputGroupAddon } from 'reactstrap';
import { RouteComponentProps } from 'react-router-dom';
import * as Yup from 'yup';

import {
    getCurrencies,
    getVacancyTypes
} from '../../../store/data/actions';
import { createVacancy } from '../../../store/vacancies/actions';
import { CreateVacancyModel, VacancyType, Currency } from '../../../models';
import CustomInput from '../../../components/base/CustomInput';
import { AppState } from '../../../store';


const fromInitalValues: CreateVacancyModel = {
    companyName: '',
    description: '',
    salaryCurrency: '',
    salaryValue: undefined,
    title: '',
    typeId: 0
}

interface AddNewVacancyProps extends RouteComponentProps {
    getCurrencies: () => void,
    getVacancyTypes: () => void,
    createVacancy: (data: CreateVacancyModel) => any,
    currencies: Array<Currency>,
    vacancyTypes: Array<VacancyType>
    loading: boolean,
    error?: string,
    vacancyId?: number
}

const renderInputField = (name: string, label: string, placeholder: string, type: string = 'text') => (
    <FormGroup>
        <Label htmlFor={name}>{label}</Label>
        <Field id={name} type={type} name={name} placeholder={placeholder} component={CustomInput} />
    </FormGroup>
)

class AddNewVacancy extends React.Component<AddNewVacancyProps, {}>{
    componentWillMount() {
        this.props.getCurrencies();
        this.props.getVacancyTypes();
    }

    onFormSubmit = (values: CreateVacancyModel, action: FormikActions<CreateVacancyModel>) => {
        console.log(values);
        this.props.createVacancy(values);
    }

    renderForm = (props: FormikProps<CreateVacancyModel>): JSX.Element => {
        return (
            <Form>
                {renderInputField("title", "Title", "Enter title")}
                {renderInputField("descripion", "Description", "Enter description", 'textarea')}
                {renderInputField("companyName", "Company Name", "Enter company name")}
                <FormGroup>
                    <Label>Type</Label>
                    <select
                        name="typeId"
                        value={props.values.typeId}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        className="form-control">
                        <option value="">Select type...</option>
                        {this.props.vacancyTypes.map(type =>
                            <option key={type.id} value={type.id} label={type.title}></option>)}
                    </select>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='salaryValue'>Salary</Label>
                    <InputGroup>
                        <Field id='salaryValue' type='number' name='salaryValue' placeholder='Enter salary' component={CustomInput} />
                        <InputGroupAddon addonType='append'>
                            <select
                                name="salaryCurrency"
                                value={props.values.salaryCurrency}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                className="form-control "
                                style={{
                                    borderTopLeftRadius: '0',
                                    borderBottomLeftRadius: '0'
                                }}>
                                <option value="">Select currency</option>
                                {this.props.currencies.map(type =>
                                    <option key={type.code} value={type.code} label={type.code}></option>)}
                            </select>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Button
                        color="primary"
                        type="submit"
                        disabled={this.props.loading}>
                        Submit
                </Button>
                    {this.props.loading && <Spinner type="grow" color="secondary" style={{ verticalAlign: 'middle' }} />}
                </FormGroup>
            </Form>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.props.error && <Alert color='danger'>{this.props.error}</Alert>}
                <Formik
                    initialValues={fromInitalValues}
                    onSubmit={this.onFormSubmit}
                    render={this.renderForm}
                />
            </React.Fragment>
        );
    }
}

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
})(AddNewVacancy);