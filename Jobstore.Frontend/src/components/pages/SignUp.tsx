import React from 'react';
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik';
import { FormGroup, Button, Label, Spinner } from 'reactstrap';
import * as Yup from 'yup';

import SignUpModel from '../../models/SignUpModel';
import CustomInput from '../base/CustomInput';
import Alert from '../../models/Alert';
import AlertMessage from '../base/AlertMessage';

interface SignUpProps {
    onSubmit(data: SignUpModel): Promise<void>;
    alert: Alert | null
}

const signUpSchema = Yup.object({
    email: Yup.string()
        .label('Email')
        .email()
        .required(),
    password: Yup.string()
        .label('Password')
        .required(),
    confirmPassword: Yup.string()
        .label('Confirm Password')
        .oneOf([Yup.ref('password'), null])
        .required(),
    firstName: Yup.string()
        .label('First Name')
        .required()
        .max(30),
    lastName: Yup.string()
        .label('Last Name')
        .required()
        .max(30)
});

class SignUp extends React.Component<SignUpProps, {}> {

    renderForm(filedProps: FormikProps<SignUpModel>): JSX.Element {
        return (
            <Form>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Field type="email" name="email" placeholder="Enter email" component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Field type="password" name="password" placeholder="Enter password" component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="confirmPassword">Password Confirm</Label>
                    <Field type="password" name="confirmPassword" placeholder="Enter password" component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="firstName">Fist Name</Label>
                    <Field name="firstName" placeholder="Enter first name" component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last name</Label>
                    <Field name="lastName" placeholder="Enter last name"  component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Button
                        color="primary"
                        type="submit"
                        disabled={filedProps.isSubmitting}>
                        Submit
                    </Button>
                    {filedProps.isSubmitting && <Spinner type="grow" color="secondary" style={{verticalAlign:'middle'}} />}
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
                    validationSchema={signUpSchema}
                    render={this.renderForm}
                    onSubmit={this.onFormSubmit}
                />
            </React.Fragment>
        );
    }
}

export default SignUp;