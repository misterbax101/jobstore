import React from 'react';
import { Formik, FormikProps, Form, Field } from 'formik';
import { FormGroup, Button, Label, Spinner, Alert, InputGroup, InputGroupAddon } from 'reactstrap';
import { RouteComponentProps } from 'react-router-dom';

import { CreateVacancyModel, VacancyType, Currency } from '../../../models';
import CustomInput from '../../../components/base/CustomInput';
import FormInput from '../../../components/base/FormInput';
import resouces from './../../../translations';
import {vacancyValidationSchema } from './vacancyValidationSchema';


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
}

class AddNewVacancy extends React.Component<AddNewVacancyProps, {}>{
    componentDidMount() {
        this.props.getCurrencies();
        this.props.getVacancyTypes();
    }

    onFormSubmit = (values: CreateVacancyModel) => {
        this.props.createVacancy(values);
    }

    renderForm = ({ values, handleBlur, handleChange }: FormikProps<CreateVacancyModel>): JSX.Element => {

        const { fields: fieldsResouces, buttonLabel } = resouces.addVacancy;
        const { currencies, loading, vacancyTypes } = this.props;

        return (
            <Form>
                <FormInput
                    name="title"
                    {...fieldsResouces.title} />
                <FormInput
                    name="descripion"
                    {...fieldsResouces.description}
                    type="textarea" />
                <FormInput
                    name="companyName"
                    {...fieldsResouces.companyName} />
                <FormGroup>
                    <Label>{fieldsResouces.type.label}</Label>
                    <select
                        name="typeId"
                        value={values.typeId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control">
                        <option value="">{fieldsResouces.type.emptyOption}</option>
                        {vacancyTypes.map(type =>
                            <option key={type.id} value={type.id} label={type.title}></option>)}
                    </select>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='salaryValue'>{fieldsResouces.salary.label}</Label>
                    <InputGroup>
                        <Field
                            id='salaryValue'
                            type='number'
                            name='salaryValue'
                            placeholder={fieldsResouces.salary.placeholder}
                            component={CustomInput} />
                        <InputGroupAddon addonType='append'>
                            <select
                                name="salaryCurrency"
                                value={values.salaryCurrency}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form-control "
                                style={{
                                    borderTopLeftRadius: '0',
                                    borderBottomLeftRadius: '0'
                                }}>
                                {currencies.map(type =>
                                    <option key={type.code} value={type.code} label={type.code}></option>)}
                            </select>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Button
                        color="primary"
                        type="submit"
                        disabled={loading}>
                        {buttonLabel}
                </Button>
                    {loading && <Spinner type="grow" color="secondary" style={{ verticalAlign: 'middle' }} />}
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
                    validationSchema={vacancyValidationSchema}
                />
            </React.Fragment>
        );
    }
}

export default AddNewVacancy;