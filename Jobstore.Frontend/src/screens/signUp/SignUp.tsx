import React from 'react';
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik';
import { FormGroup, Button, Label, Spinner } from 'reactstrap';

import { Alert, SignUpModel } from '../../models';
import { signUpValidationSchema } from './signUpValidationSchema';
import CustomInput from './../../components/base/CustomInput';
import AlertMessage from './../../components/base/AlertMessage';
import resources from '../../translations';

const { fields: fieldResources, placholders, buttonLabels } = resources.common;

interface SignUpProps {
    onSubmit(data: SignUpModel): Promise<void>;
    alert: Alert | null
}

class SignUp extends React.Component<SignUpProps, {}> {

    renderForm(filedProps: FormikProps<SignUpModel>): JSX.Element {
        return (
            <Form>
                <FormGroup>
                    <Label htmlFor="email">{fieldResources.email}</Label>
                    <Field type="email" name="email" placeholder={placholders.emailPlacholder} component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">{fieldResources.passwordConfirm}</Label>
                    <Field type="password" name="password" placeholder={placholders.passwordPlacholder} component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="confirmPassword">{fieldResources.passwordConfirm}</Label>
                    <Field type="password" name="confirmPassword" placeholder={placholders.passwordPlacholder} component={CustomInput} />
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
                    {filedProps.isSubmitting && <Spinner type="grow" color="secondary" style={{ verticalAlign: 'middle' }} />}
                </FormGroup>
            </Form>
        );
    }

    onFormSubmit = async (values: SignUpModel, actions: FormikActions<SignUpModel>): Promise<void> => {
        await this.props.onSubmit(values);
        actions.setSubmitting(false);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.alert && <AlertMessage data={this.props.alert} />}
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' }}
                    validationSchema={signUpValidationSchema}
                    render={this.renderForm}
                    onSubmit={this.onFormSubmit}
                />
            </React.Fragment>
        );
    }
}

export default SignUp;