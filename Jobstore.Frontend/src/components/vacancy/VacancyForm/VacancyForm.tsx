import React from 'react';
import { Formik, FormikProps, Form, Field } from 'formik';
import { Col, FormGroup, Label, InputGroup, InputGroupAddon, Button } from 'reactstrap';

import { CreateVacancyModel, Currency, VacancyType, VacancyModel } from '../../../types';
import { vacancyValidationSchema } from './vacancyValidationSchema';
import CustomInput from '../../base/CustomInput';
import FormInput from '../../base/FormInput';
import resouces from '../../../translations';

interface VacancyFormProps {
    initialValues: CreateVacancyModel | VacancyModel,
    currencies: Array<Currency>
    vacancyTypes: Array<VacancyType>
    onSubmit: (values: CreateVacancyModel) => void
}

 const VacancyForm: React.FC<VacancyFormProps> = ({ initialValues, onSubmit, currencies, vacancyTypes }) => {

    const renderForm = ({ values, handleBlur, handleChange }: FormikProps<CreateVacancyModel>): JSX.Element => {

        const { fields: fieldsResouces, buttonLabel } = resouces.addVacancy;

        return (
            <Form>
                <Col>
                    <FormInput
                        name="title"
                        {...fieldsResouces.title} />
                </Col>
                <Col>
                    <FormInput
                        name="description"
                        {...fieldsResouces.description}
                        type="textarea" />
                </Col>
                <Col>
                    <FormInput
                        name="companyName"
                        {...fieldsResouces.companyName} />
                </Col>
                <Col>
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
                </Col>
                <Col>
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
                                    <option value="">Select</option>
                                    {currencies.map(type =>
                                        <option key={type.code} value={type.code} label={type.code}></option>)}
                                </select>
                            </InputGroupAddon>
                        </InputGroup>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Button
                            color="primary"
                            type="submit">
                            {buttonLabel}
                        </Button>
                    </FormGroup>
                </Col>
            </Form>
        );
    }

    const onFormSubmit = (values: CreateVacancyModel) => {
        onSubmit(values);
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onFormSubmit}
            render={renderForm}
            enableReinitialize={true}
            validationSchema={vacancyValidationSchema}
        />
    );
}

export default VacancyForm;