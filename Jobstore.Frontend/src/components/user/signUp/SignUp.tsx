import React from 'react';
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik';
import { FormGroup, Button, Label, Spinner, Col } from 'reactstrap';

import { SignUpModel, RequestStatus } from '../../../types';
import { signUpValidationSchema } from './signUpValidationSchema';
import CustomInput from '../../base/CustomInput';
import FormAlerts from '../../base/FormAlerts';
import resources from '../../../translations';
import ButtonSpinner from '../../base/ButtonSpinner';


interface SignUpProps {
    onSubmit(data: SignUpModel): Promise<void>;
    requestStatus: RequestStatus;
}

class SignUp extends React.Component<SignUpProps, {}> {
    renderForm(filedProps: FormikProps<SignUpModel>): JSX.Element {
        const { fields: fieldResources, placholders, buttonLabels } = resources.common;
        return (
            <Form>
                <FormGroup>
                    <Label htmlFor="email">{fieldResources.email}</Label>
                    <Field type="email" name="email" placeholder={placholders.emailPlacholder} component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">{fieldResources.password}</Label>
                    <Field type="password" name="password" placeholder={placholders.passwordPlacholder} component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="confirmPassword">{fieldResources.passwordConfirm}</Label>
                    <Field type="password" name="confirmPassword" placeholder={placholders.passwordConfirmPlacholder} component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="firstName">{fieldResources.firstName}</Label>
                    <Field name="firstName" placeholder={placholders.lastNamePlacholder} component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">{fieldResources.lastName}</Label>
                    <Field name="lastName" placeholder={placholders.lastNamePlacholder} component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Button
                        color="primary"
                        type="submit"
                        disabled={filedProps.isSubmitting}>
                        {buttonLabels.submit}
                    </Button>
                    <ButtonSpinner loading={filedProps.isSubmitting} /> 
                </FormGroup>
            </Form>
        );
    }

    onFormSubmit = async (values: SignUpModel, actions: FormikActions<SignUpModel>): Promise<void> => {
        await this.props.onSubmit(values);
        actions.setSubmitting(false);
    }

    render() {
        const formInitialValues: SignUpModel = { email: '', password: '', confirmPassword: '', firstName: '', lastName: '' };
        const { header } = resources.signUp;
        return (
            <Col>
                <h2>{header}</h2>
                <FormAlerts {...this.props.requestStatus} />
                <Formik
                    initialValues={formInitialValues}
                    validationSchema={signUpValidationSchema}
                    render={this.renderForm}
                    onSubmit={this.onFormSubmit}
                />
            </Col>
        );
    }
}

export default SignUp;